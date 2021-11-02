import identity from 'fnts/identity';
import type { Either } from 'fnts/either';
import bimap from 'fnts/either/operators/bimap';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { clientConfig } from '@/core/config';
import { request, RequestError } from 'shared/entity';

const internalAPIAxiosInstance = axios.create({
  baseURL: clientConfig.apiURL,
});

export const internalAPIRequest = async <Data>(
  url: string,
  config: AxiosRequestConfig & { useCache?: boolean } = {}
): Promise<Either<RequestError, Data>> => {
  return bimap<RequestError, AxiosResponse<Data>, RequestError, Data>(
    await request(internalAPIAxiosInstance)(url, {
      cacheTTL: clientConfig.apiRequestCacheTTL,
      ...config,
    }),
    identity,
    ({ data }) => data
  );
};
