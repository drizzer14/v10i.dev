import type { FC } from 'react';

import { SEO } from '@/core/seo';
import { Markdown } from '@/shared/components';
import { lazyLoad, matchDevice } from '@/shared/utils';
import type { Post as PostType, SEOProps } from 'shared/entity';

import packageJSON from '../../../../../package.json';

import * as Styled from './post.styles';

const Progress = lazyLoad('Progress', () => import('./progress'), {
  ssr: false,
});

const Share = lazyLoad('Share', () => import('./share'), {
  ssr: false,
});

type PostProps = SEOProps &
  Pick<PostType, 'readTime' | 'excerpt'> & {
    children: string;
  };

export const Post: FC<PostProps> = ({
  children,
  title,
  description,
  excerpt,
  url,
  date,
  image,
  readTime,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        openGraph={{
          type: 'article',
          title,
          description,
          url,
          article: {
            publishedTime: date,
            authors: [packageJSON.author.url],
          },
          images: image && [image],
        }}
      />

      <Styled.Post>
        <Progress />

        <Styled.Title>{title}</Styled.Title>

        <Styled.Meta date={date} readTime={readTime} />

        {excerpt && <Markdown>{excerpt}</Markdown>}

        {matchDevice({
          nonDesktop: () => <Share title={title} text={excerpt!} url={url} />,
        })}

        {image && <Styled.Hero src={image.url} alt={title} />}

        <Markdown>{children}</Markdown>

        {matchDevice({
          nonDesktop: () => <Share title={title} text={excerpt!} url={url} />,
        })}
      </Styled.Post>
    </>
  );
};
