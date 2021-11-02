import getConfig from 'next/config';

export type APIConfig = {
  gitHubAPIURL: string;
  gitHubAPIToken: string;
  gitHubContentRepoOwner: string;
  gitHubContentRepoName: string;
};

export const apiConfig: APIConfig = getConfig().serverRuntimeConfig;
