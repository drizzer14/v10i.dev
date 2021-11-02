import { Injectable } from '@nestjs/common';

import type { APIConfig as APIConfigType } from '../api.config';

import { Config } from './config.service';

@Injectable()
export class APIConfig extends Config<APIConfigType> implements APIConfigType {
  protected readonly name = 'api';

  public get gitHubAPIURL(): string {
    return this.get('gitHubAPIURL');
  }

  public get gitHubContentRepoOwner(): string {
    return this.get('gitHubContentRepoOwner');
  }

  public get gitHubAPIToken(): string {
    return this.get('gitHubAPIToken');
  }

  public get gitHubContentRepoName(): string {
    return this.get('gitHubContentRepoName');
  }
}
