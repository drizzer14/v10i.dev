import type { FC } from 'react';

import { SEO } from '@/modules/seo';
import { Markdown } from '@/shared/components';
import { markdownConfig } from '@/shared/components/markdown';
import type { Post as PostType, SEOProps } from 'shared/entity';
import {
  formatDateString,
  formatReadTime,
  lazyLoad,
  matchDevice,
} from '@/shared/utils';

import packageJSON from '../../../../../../package.json';

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
        twitter={{
          cardType: image ? 'summary' : 'summary_large_image',
        }}
      />

      <Styled.Post>
        <Progress />

        {image && <Styled.Hero src={image.url} alt={title} />}

        <Styled.Title>{title}</Styled.Title>

        <Styled.Meta
          contents={[formatDateString(date!), formatReadTime(readTime)]}
        />

        {excerpt && <Markdown {...markdownConfig}>{excerpt}</Markdown>}

        {matchDevice({
          nonDesktop: () => <Share title={title} text={excerpt!} url={url} />,
        })}

        <Markdown {...markdownConfig}>{children}</Markdown>

        {matchDevice({
          nonDesktop: () => <Share title={title} text={excerpt!} url={url} />,
        })}
      </Styled.Post>
    </>
  );
};
