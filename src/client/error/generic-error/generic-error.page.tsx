import { useEffect } from 'react';
import type { NextPage } from 'next';

import { SEO } from '@/core/seo';
import { Error } from '@/shared/components';
import { reportError } from '@/shared/utils';

type NextError = Error & {
  statusCode: number;
};

type GenericErrorProps = {
  error: NextError;
};

const GenericError: NextPage<GenericErrorProps> = ({ error }) => {
  useEffect(() => {
    reportError(error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SEO title={`${error.statusCode}`} />

      <Error statusCode={error.statusCode} />
    </>
  );
};

// eslint-disable-next-line functional/immutable-data
GenericError.getInitialProps = ({ res, err }) => {
  return {
    error: {
      ...err,
      statusCode: res ? res.statusCode : err ? err.statusCode : 404,
    } as Required<NextError>,
  };
};

export default GenericError;
