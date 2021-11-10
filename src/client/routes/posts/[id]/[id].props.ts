import bifoldMap from 'fnts/either/operators/bifold-map';

import {
  cacheGSSP,
  createFailProps,
  maybeNotFoundGSSP,
  createSuccessProps,
} from '@/shared/utils';
import type { Post, RequestError } from 'shared/entity';
import { internalAPIRequest, PageProps } from '@/shared/entity';

export type PostPageProps = PageProps<Post>;

export const getServerSideProps = maybeNotFoundGSSP(
  cacheGSSP<
    PostPageProps,
    {
      id: string;
    }
  >(async ({ params, useCache }) => {
    const url = `posts/${params!.id}`;

    return bifoldMap<RequestError, Post, { props: PostPageProps }>(
      await internalAPIRequest(url, {
        method: 'get',
        useCache,
      }),
      createFailProps,
      (data) => createSuccessProps({ key: data.id, ...data })
    );
  })
);
