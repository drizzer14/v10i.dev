import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';

import { clientConfig } from '@/core/config';

export const cacheGSSP = <
  Props extends { [key: string]: any } = { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery
>(
  getServerSideProps: (
    context: GetServerSidePropsContext<Query> & { useCache: boolean }
  ) => Promise<GetServerSidePropsResult<Props>>
): GetServerSideProps<Props, Query> => {
  return (context) => {
    const useCache =
      !context.req.headers['cache-control']?.includes('no-cache');

    // eslint-disable-next-line functional/no-conditional-statement
    if (useCache) {
      context.res.setHeader(
        'Cache-Control',
        `max-age=${clientConfig.apiRequestCacheTTL}`
      );
    }

    return getServerSideProps({ ...context, useCache });
  };
};
