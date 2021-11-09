import type { NextPage } from 'next';

import { SEO } from '@/modules/seo';
import { Error } from '@/shared/components';
import { HTTPStatus } from 'shared/entity';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <SEO title="404" />

      <Error statusCode={HTTPStatus.NotFound} />
    </>
  );
};

export default NotFoundPage;
