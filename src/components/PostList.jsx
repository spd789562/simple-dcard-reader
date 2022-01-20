import { usePost } from 'store/posts';

import PostItem from 'components/PostItem';

const PostList = () => {
  const { posts } = usePost();
  return posts.map((post) => <PostItem key={`post-${post.id}`} post={post} />);
};

export default PostList;
