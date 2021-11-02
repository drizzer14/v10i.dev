import axios from 'axios';

import { request } from 'shared/entity';
import { apiConfig } from '$/core/config';

const githubAPIAxiosInstance = axios.create({
  baseURL: apiConfig.gitHubAPIURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3.raw',
    Authorization: `Bearer ${apiConfig.gitHubAPIToken}`,
  },
});

export const githubAPIRequest = request(githubAPIAxiosInstance);
