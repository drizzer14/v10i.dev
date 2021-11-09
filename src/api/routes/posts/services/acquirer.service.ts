import matter from 'gray-matter';
import { remark } from 'remark';
import inject from 'fnts/inject';
import strip from 'strip-markdown';
import type { AxiosResponse } from 'axios';
import bifoldMap from 'fnts/either/operators/bifold-map';
import { Inject, Injectable, Logger } from '@nestjs/common';

import { rethrow } from 'shared/utils';
import { appConfig } from 'shared/config';
import { APIConfig } from '$/core/config';
import { githubAPIRequest } from '$/shared/entity';
import type { Post, RequestError, SEOProps } from 'shared/entity';

@Injectable()
export class Acquirer {
  private readonly logger = new Logger('Acquirer');

  public constructor(
    @Inject(APIConfig)
    private readonly apiConfig: APIConfig
  ) {}

  private static stripMarkdown(content: string): string {
    return remark().use(strip).processSync(content).toString();
  }

  public async get(id: string): Promise<Post> {
    return bifoldMap<RequestError, AxiosResponse<string>, Post>(
      await githubAPIRequest(
        `repos/${this.apiConfig.gitHubContentRepoOwner}/${this.apiConfig.gitHubContentRepoName}/contents/${id}.md`,
        {
          method: 'get',
        }
      ),
      rethrow(({ url, statusCode, message }) => {
        this.logger.error(
          `Failed to receive post by url ${url}: ${statusCode} – ${message}`
        );
      }),
      inject(
        ({ data: file }) => {
          const { data, content, excerpt } = matter(file, { excerpt: true });

          const contentWithoutExcerpt = content.replace(
            `${excerpt}---\n\n`,
            ''
          );

          return {
            id,
            seo: {
              ...(data as Pick<SEOProps, 'title' | 'date' | 'image'>),
              description: excerpt && Acquirer.stripMarkdown(excerpt),
              url: `${appConfig.baseURL}/p/${id}`,
            },
            content: contentWithoutExcerpt,
            readTime: Math.ceil(
              Acquirer.stripMarkdown(contentWithoutExcerpt)
                .replace(/\n/g, ' ')
                .split(' ').length / 225
            ),
            excerpt,
          };
        },
        () => this.logger.log(`Successfully received the post with id "${id}".`)
      )
    );
  }
}
