import type { NextPage } from 'next';
import { ReactNode, useMemo } from 'react';
import bifoldMap from 'fnts/either/operators/bifold-map';

import { lazyLoad, tryVibrate } from '@/shared/utils';

import { usePosts } from './hooks';
import { linksConfig } from './config';
import * as Styled from './posts.styles';
import { postsConfig } from './config/posts.config';
import { PostSkeleton } from './post-skeleton';
import { List as PostSkeletonsList } from './shared/components';

const PostsList = lazyLoad('PostsList', () => import('./posts-list'));

const LinksList = lazyLoad(
  'LinksList',
  () => import('@/shared/components/links-list'),
  {
    ssr: false,
  }
);

const Error = lazyLoad('Error', () => import('@/shared/components/error'));

const renderPostsSkeletons = (): ReactNode[] => {
  return Array.from({ length: postsConfig.size }, (_, index) => {
    return (
      <li key={`${Math.random().toString(32)}${index}`}>
        <PostSkeleton />
      </li>
    );
  });
};

const PostsPage: NextPage = () => {
  const [response, { isDone, isLoading, postsLeft, next }] = usePosts();

  const incrementPageText = useMemo(() => {
    if (postsLeft > postsConfig.size) {
      return `Load ${postsConfig.size} more out of ${postsLeft} left`;
    }

    return `Load ${postsLeft} more`;
  }, [postsLeft]);

  return bifoldMap(
    response,
    (error) => <Error {...error} />,
    (data) => (
      <>
        {data.length > 0 && <PostsList posts={data} />}

        {data.length === 0 && !isLoading && (
          <Styled.EmptyDataMessage>
            <p>
              I haven&apos;t written anything yet 🐈 <br /> go give me a bump
              somewhere in here:
            </p>

            <LinksList
              links={linksConfig}
              areLinksInteractive={false}
              areTitlesDefaultShown
            />
          </Styled.EmptyDataMessage>
        )}

        {isLoading && (
          <PostSkeletonsList>{renderPostsSkeletons()}</PostSkeletonsList>
        )}

        {!isDone && !isLoading && (
          <Styled.IncrementPageButton
            onClick={() => {
              tryVibrate();

              next();
            }}
          >
            <span>{incrementPageText}</span>
          </Styled.IncrementPageButton>
        )}
      </>
    )
  );
};

export default PostsPage;
