import { useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import type { Fetcher, KeyLoader } from 'swr';
import { Either, left, right } from 'fnts/either';
import { bifoldr } from 'fnts/either/operators/bifold';

import { internalAPIRequest } from '@/shared/entity';
import type { ListPost, RequestError, SearchResult } from 'shared/entity';

import { postsConfig } from '../config/posts.config';

type UsePosts = [
  response: Either<RequestError, ListPost[]>,
  config: {
    isDone: boolean;
    isLoading: boolean;
    postsLeft: number;
    next: () => void;
  }
];

const getKey: KeyLoader<SearchResult[]> = (page, previousPageData) => {
  if (previousPageData && previousPageData.length === 0) {
    return null;
  }

  return `/posts?page=${page + 1}&size=${postsConfig.size}`;
};

const fetcher: Fetcher<SearchResult[]> = async (url) => {
  return bifoldr(
    await internalAPIRequest<SearchResult[]>(url, {
      method: 'get',
    })
  )!;
};

export const usePosts = (): UsePosts => {
  const {
    data,
    error,
    size,
    setSize,
    // @ts-ignore: Incorrect arguments overload
  } = useSWRInfinite<SearchResult, RequestError>(getKey, fetcher);

  const response = useMemo(() => {
    if (!data && !error) {
      return right([]);
    }

    return data && data[data.length - 1] !== undefined
      ? right(data.flatMap(({ posts }) => posts))
      : left(error!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, size]);

  return [
    response,
    {
      // @ts-ignore: ...
      isDone: data?.[data?.length - 1]?.isLastPage,
      isLoading:
        (!data && !error) ||
        (size > 0 && typeof data?.[size - 1] === 'undefined'),
      postsLeft: data?.[data?.length - 1]?.postsLeft || 0,
      next: () => setSize(size + 1),
    },
  ];
};
