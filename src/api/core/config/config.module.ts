import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule, registerAs } from '@nestjs/config';

import * as configs from './services';
import { apiConfig } from './api.config';

const configProviders = Object.values(configs);

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      load: ([['api', apiConfig]] as const).map(([token, config]) =>
        registerAs(token, () => config)
      ),
    }),
  ],
  providers: configProviders,
  exports: configProviders,
})
export class ConfigModule {}
