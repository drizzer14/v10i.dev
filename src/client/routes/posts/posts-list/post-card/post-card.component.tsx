import Link from 'next/link';
import maybe, { Maybe } from 'fnts/maybe';
import fold from 'fnts/maybe/operators/fold';
import { FC, ReactNode, useMemo } from 'react';

import { useToggle } from '@/shared/hooks';
import type { ListPost } from 'shared/entity';
import { Meta } from '@/routes/posts/shared/components';
import { lazyLoad, tryVibrate } from '@/shared/utils';

import * as Styled from './post-card.styles';

const ImageSkeleton = lazyLoad(
  'ImageSkeleton',
  () => import('@/routes/posts/shared/components/image-skeleton')
);

const Markdown = lazyLoad(
  'Markdown',
  () => import('@/shared/components/markdown')
);

type PostCardProps = ListPost;

export const PostCard: FC<PostCardProps> = ({
  id,
  title,
  content,
  imageURL,
  date,
  readTime,
}) => {
  const [hasImageLoaded, toggleImage] = useToggle();

  const maybeImage = useMemo<Maybe<ReactNode>>(() => {
    return maybe(
      imageURL && (
        <>
          <Styled.Hero
            src={imageURL}
            alt={title}
            onLoad={() => toggleImage(true)}
          />

          {!hasImageLoaded && <ImageSkeleton />}
        </>
      )
    );
  }, [imageURL, title, toggleImage, hasImageLoaded]);

  return (
    <Styled.PostCard>
      <Link href={`/p/${id}`} passHref>
        <Styled.Link
          // eslint-disable-next-line functional/prefer-tacit
          onClick={() => tryVibrate()}
        >
          {fold(maybeImage)}

          <Styled.Title>{title}</Styled.Title>
        </Styled.Link>
      </Link>

      <Meta date={date} readTime={readTime} />

      {content && (
        <Styled.Description>
          <Markdown>{content}</Markdown>
        </Styled.Description>
      )}
    </Styled.PostCard>
  );
};
