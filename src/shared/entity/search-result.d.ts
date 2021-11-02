import type { ListPost } from './post';

export type SearchResult = {
  posts: ListPost[];
} & (
  | { isLastPage: false; postsLeft: number; nextPage: number }
  | { isLastPage: true; postsLeft: 0; nextPage: undefined }
);
