import dayjs from 'dayjs';
import tap from 'fnts/tap';
import { compose } from 'fnts';
import utc from 'dayjs/plugin/utc';
import { Feed, Author } from 'feed';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import bifoldMap from 'fnts/either/operators/bifold-map';

import {
  cacheGSSP,
  createFailProps,
  createSuccessProps,
  maybeNotFoundGSSP,
} from '@/shared/utils';
import { seoConfig } from '@/modules/seo';
import { appConfig } from 'shared/config';
import { Markdown } from '@/shared/components';
import { RequestError, SearchResult } from 'shared/entity';
import { internalAPIRequest, PageProps } from '@/shared/entity';

import packageJSON from '../../../../package.json';

dayjs.extend(utc);

type RSSPageProps = PageProps<unknown>;

export const getServerSideProps = maybeNotFoundGSSP(
  cacheGSSP<RSSPageProps>(async ({ res, useCache }) => {
    return bifoldMap<RequestError, SearchResult, { props: RSSPageProps }>(
      await internalAPIRequest<SearchResult>('/posts', {
        method: 'get',
        params: {
          full: true,
        },
        useCache,
      }),
      createFailProps,
      compose(
        createSuccessProps,
        tap<SearchResult>(async ({ posts }) => {
          const author: Author = {
            name: packageJSON.author.name,
            email: packageJSON.author.email,
            link: packageJSON.author.url,
          };

          const feed = new Feed({
            title: seoConfig.title!,
            id: appConfig.baseURL,
            link: appConfig.baseURL,
            language: 'en',
            feedLinks: {
              rss2: `${appConfig.baseURL}/rss.xml`,
            },
            author,
            // @ts-ignore: optional property in standard
            copyright: undefined,
          });

          // eslint-disable-next-line functional/no-loop-statement, no-restricted-syntax
          for await (const {
            title,
            content,
            excerpt,
            url,
            date,
            imageURL,
          } of posts) {
            feed.addItem({
              title,
              description: excerpt,
              id: url,
              link: url,
              content: renderToString(
                createElement(Markdown, {
                  children: content!,
                })
              ),
              author: [author],
              date: dayjs(date).utc().toDate(),
              image: imageURL
                ?.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;'),
            });
          }

          res.setHeader('Content-Type', 'text/xml; charset=utf-8');

          res.write(feed.rss2());

          res.end();
        })
      )
    );
  })
);
