import { makePage } from '@/shared/utils';

import { Post } from './post';
import type { PostPageProps } from './[id].props';

const PostPage = makePage<PostPageProps>(
  ({ seo, content, excerpt, readTime }) => {
    return (
      <Post {...seo} excerpt={excerpt} readTime={readTime}>
        {content}
      </Post>
    );
  }
);

export default PostPage;
