import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import tap from 'fnts/tap';
import cache from 'memory-cache';
import right from 'fnts/either/right';
import either, { Either } from 'fnts/either';
import bimap from 'fnts/either/operators/bimap';

import type { RequestError } from './request-error';

type RequestConfig = AxiosRequestConfig &
  (
    | {
        useCache: true;
        cacheTTL: number;
      }
    | {
        useCache?: false;
      }
  );

export const request = (client: AxiosInstance) => {
  return async <Data>(
    url: string,
    config: RequestConfig = {}
  ): Promise<Either<RequestError, AxiosResponse<Data>>> => {
    const { url: _, useCache, ...requestConfig } = config;

    if (useCache) {
      const cachedData = cache.get(url);

      if (cachedData) {
        return right(cachedData);
      }
    }

    return bimap<
      AxiosError,
      AxiosResponse<Data>,
      RequestError,
      AxiosResponse<Data>
    >(
      await either(() => {
        return client({
          url,
          ...requestConfig,
        });
      }),
      (error) => ({
        url: `${client.defaults.baseURL}/${url}`,
        message: error.response?.data.message,
        statusCode: error.response?.status || 500,
      }),
      tap((data) => {
        // eslint-disable-next-line functional/no-conditional-statement
        if (useCache) {
          cache.put(url, data, config.cacheTTL);
        }
      })
    );
  };
};
