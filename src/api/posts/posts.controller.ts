import { Controller, Get, Inject, Param, Query } from '@nestjs/common';

import type { Post, SearchResult } from 'shared/entity';

import { Searcher, Acquirer } from './services';

@Controller('/posts')
export class PostsController {
  public constructor(
    @Inject(Searcher)
    private readonly searcher: Searcher,
    @Inject(Acquirer)
    private readonly acquirer: Acquirer
  ) {}

  @Get('/')
  public async getPosts(
    @Query('page')
    page?: number,
    @Query('size')
    size?: number,
    @Query('short')
    full?: string
  ): Promise<SearchResult> {
    return this.searcher.search({ page, size, full: full === 'true' });
  }

  @Get('/:id')
  public async getPost(
    @Param('id')
    id: string
  ): Promise<Post> {
    return this.acquirer.get(id);
  }
}
