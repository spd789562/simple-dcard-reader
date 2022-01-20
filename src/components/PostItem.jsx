import styled from 'styled-components';

import PostTitle from 'components/styled/PostTitle';
import PostDesc from 'components/styled/PostDesc';

const PostContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #aaa;
`;

const Skeleton = styled.div`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '2rem' }) => height};
  margin-top: ${({ marginTop = '0' }) => marginTop};
  border-radius: 3px;
  background-image: linear-gradient(45deg, #fafafa 25%, #f4f4f4 75%);
  background-size: 200% 100%;
  animation: gradient 0.5s ease infinite;
  @keyframes gradient {
    to {
      background-position: 100% 0;
    }
  }
`;

const PostItem = ({ post }) => (
  <PostContainer>
    {post.skeleton ? (
      <>
        <Skeleton width="75%" />
        <Skeleton height="1.5rem" marginTop="1.5rem" />
      </>
    ) : (
      <>
        <PostTitle>{post.title}</PostTitle>
        <PostDesc>{post.excerpt}</PostDesc>
      </>
    )}
  </PostContainer>
);

export default PostItem;
