import type { NextPage } from 'next';

import { SEO } from '@/core/seo';
import { HTTPStatus } from 'shared/entity';
import { Error } from '@/shared/components';

const InternalError: NextPage = () => {
  return (
    <>
      <SEO title={`${HTTPStatus.InternalServerError}`} />

      <Error statusCode={HTTPStatus.InternalServerError} />
    </>
  );
};

export default InternalError;
