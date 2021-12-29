import dayjs from 'dayjs';
import inject from 'fnts/inject';
import type { Map } from 'fnts/types';
import axios, { AxiosResponse } from 'axios';
import { just, Maybe, nothing } from 'fnts/maybe';
import { fold, isJust } from 'fnts/maybe/operators';
import bifoldMap from 'fnts/either/operators/bifold-map';
import { Inject, Injectable, Logger } from '@nestjs/common';

import { APIConfig } from '$/core/config';
import { githubAPIRequest } from '$/shared/entity';
import { rethrow, orUndefined, comprehend } from 'shared/utils';
import type { ListPost, RequestError, SearchResult } from 'shared/entity';

import { Acquirer } from './acquirer.service';

type GitHubAPIResponse = {
  total_count: number;
  items: Array<{
    name: string;
  }>;
};

type LinkHeaderPointers = {
  next?: number;
  last?: number;
};

@Injectable()
export class Searcher {
  private static readonly linkPointerRegExp =
    // eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/optimal-quantifier-concatenation
    /<.+[&?]page=(?<page>\d+).*>; rel="(?<relation>\w+)"/;

  private readonly logger = new Logger('Searcher');

  public constructor(
    @Inject(APIConfig)
    private readonly apiConfig: APIConfig,
    @Inject(Acquirer)
    private readonly acquirer: Acquirer
  ) {}

  private static extractLinkHeaderPointers(
    linkHeader: string
  ): LinkHeaderPointers {
    return Object.fromEntries(
      linkHeader.split(', ').map((linkPointer: string) => {
        const { groups } = linkPointer.match(this.linkPointerRegExp)!;

        return [groups?.relation, Number(groups?.page)];
      })
    ) as LinkHeaderPointers;
  }

  public async search(query: {
    page?: number;
    size?: number;
    full?: boolean;
  }): Promise<SearchResult> {
    const { page, size, full } = query;

    return bifoldMap<
      RequestError,
      AxiosResponse<GitHubAPIResponse>,
      Promise<SearchResult>
    >(
      await githubAPIRequest('search/code', {
        method: 'get',
        params: {
          q: `repo:${this.apiConfig.gitHubContentRepoOwner}/${this.apiConfig.gitHubContentRepoName}`,
          page,
          per_page: size,
        },
      }),
      rethrow(({ url, statusCode, message }) => {
        this.logger.error(
          `Failed to receive posts by url ${url}: ${statusCode} – ${message}`
        );
      }),
      inject(
        async ({ data, headers }) => {
          const linkHeader = headers.link;

          const { next: nextPage, last: lastPage = page } = linkHeader
            ? Searcher.extractLinkHeaderPointers(linkHeader)
            : {
                next: undefined,
                last: page,
              };

          return {
            posts: [
              ...comprehend(
                await Promise.all(
                  data.items.map((meta) => this.getOne(meta, full))
                ),
                isJust,
                fold as Map<Maybe<ListPost>, ListPost>
              ),
            ].sort(({ date: dateA }, { date: dateB }) => {
              return dayjs(dateB).unix() - dayjs(dateA).unix();
            }),
            postsLeft:
              page && size ? Math.max(0, data.total_count - page * size) : 0,
            nextPage,
            isLastPage: page === lastPage,
          } as SearchResult;
        },
        ({ config }) => {
          this.logger.log(
            `Successfully received all posts from ${
              config.baseURL
            }/${axios.getUri(config)}.`
          );
        }
      )
    );
  }

  private getOne(
    meta: GitHubAPIResponse['items'][number],
    full?: boolean
  ): Promise<Maybe<ListPost>> {
    return this.acquirer
      .get(meta.name.slice(0, -3))
      .then(({ id, excerpt, readTime, seo, content }) => {
        return just({
          id,
          title: seo.title,
          excerpt: orUndefined(full && excerpt),
          content: full ? content : excerpt,
          date: seo.date,
          url: seo.url,
          imageURL: seo.image?.url,
          readTime,
        });
      })
      .catch(nothing);
  }
}
