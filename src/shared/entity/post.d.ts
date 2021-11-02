import type { SEOProps } from './seo-props';

export type Post = {
  id: string;
  seo: SEOProps;
  content: string;
  readTime: number;
  excerpt?: string;
};

export type ListPost = Pick<Post, 'id' | 'readTime' | 'excerpt'> &
  Pick<SEOProps, 'title' | 'date'> & {
    url: string;
    content?: string;
    imageURL?: string;
  };
