import Link from 'next/link';
import type { FC } from 'react';

import type { ListPost } from 'shared/entity';
import { Meta } from '@/routes/posts/shared/components';
import { lazyLoad, tryVibrate } from '@/shared/utils';

import * as Styled from './post-card.styles';

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
  return (
    <Styled.PostCard>
      <Link href={`/p/${id}`} passHref>
        <Styled.Link
          // eslint-disable-next-line functional/prefer-tacit
          onClick={() => tryVibrate()}
        >
          {imageURL && <Styled.Hero src={imageURL} alt={title} />}

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
