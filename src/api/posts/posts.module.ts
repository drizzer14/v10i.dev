import { Module } from '@nestjs/common';

import { Acquirer, Searcher } from './services';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [Acquirer, Searcher],
})
export class PostsModule {}
