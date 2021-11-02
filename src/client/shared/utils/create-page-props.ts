import type { RequestError } from 'shared/entity';

import type { PageFailProps, PageSuccessProps } from '../entity';

export const createSuccessProps = <Data>(
  data: Data
): { props: PageSuccessProps<Data> } => ({
  props: {
    isSuccess: true,
    data,
  },
});

export const createFailProps = (
  error: RequestError
): { props: PageFailProps } => {
  return error.statusCode === 404
    ? {
        // @ts-ignore: The real props would still get to the page,
        // but the `notFound` object would just redirect to /404
        notFound: true,
      }
    : {
        props: {
          isSuccess: false,
          error,
        },
      };
};
