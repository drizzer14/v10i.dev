import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export abstract class Config<
  ConfigType extends Record<string, string | number | boolean>
> {
  protected abstract name: string;

  public constructor(
    @Inject(ConfigService)
    protected readonly config: ConfigService<ConfigType>
  ) {}

  protected get<Key extends keyof ConfigType>(key: Key): ConfigType[Key] {
    return this.config.get(`${this.name}.${key}`)!;
  }
}
