import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import type { ParsedUrlQuery } from 'querystring';

export const maybeNotFoundGSSP = <
  Props extends { [key: string]: any } = { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery
>(
  getServerSideProps: (
    context: GetServerSidePropsContext<Query>
  ) => Promise<GetServerSidePropsResult<Props>>
): GetServerSideProps<Props, Query> => {
  return async (context) => {
    if (context.res.statusCode === 404) {
      return {
        notFound: true,
      };
    }

    return getServerSideProps(context);
  };
};
