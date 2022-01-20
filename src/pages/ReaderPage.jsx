import { PostProvider } from 'store/posts';

import Container from 'components/styled/Container';
import PostList from 'components/PostList';
import PostPlaceholder from 'components/PostPlaceholder';

const ReaderPage = () => {
  return (
    <PostProvider>
      <Container>
        <PostList />
        <PostPlaceholder />
      </Container>
    </PostProvider>
  );
};

export default ReaderPage;
