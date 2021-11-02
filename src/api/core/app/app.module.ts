import { Module } from '@nestjs/common';

import { PostsModule } from '$/posts';
import { ConfigModule } from '$/core/config';

@Module({
  imports: [ConfigModule, PostsModule],
})
export class AppModule {}
