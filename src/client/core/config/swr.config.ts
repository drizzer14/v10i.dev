import cache from 'memory-cache';
import { SWRConfig as SWRConfigProvider } from 'swr';

import type { Props } from '@/shared/entity';

import { clientConfig } from './client.config';

export type SWRConfig = Props<typeof SWRConfigProvider>;

export const swrConfig: SWRConfig = {
  provider: () => {
    return {
      get: (key: string): any => cache.get(key),
      set: (key: string, value: any): void =>
        cache.put(key, value, clientConfig.apiRequestCacheTTL),
      delete: (key: string): void => cache.del(key),
    };
  },
};
