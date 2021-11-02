import getConfig from 'next/config';

export type AppConfig = {
  baseURL: string;
};

export const appConfig: AppConfig = getConfig().publicRuntimeConfig;
