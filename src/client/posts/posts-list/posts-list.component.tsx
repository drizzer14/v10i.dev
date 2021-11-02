import type { FC } from 'react';

import type { ListPost } from 'shared/entity';

import { List } from '../shared/components';

import { PostCard } from './post-card';

type PostsListProps = {
  posts: ListPost[];
};

export const PostsList: FC<PostsListProps> = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        );
      })}
    </List>
  );
};
