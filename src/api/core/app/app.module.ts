import { Module } from '@nestjs/common';

import { PostsModule } from '$/routes/posts';
import { ConfigModule } from '$/core/config';

@Module({
  imports: [ConfigModule, PostsModule],
})
export class AppModule {}
