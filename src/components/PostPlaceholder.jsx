import { useEffect } from 'react';
import { usePost } from 'store/posts';

import Loading from 'components/styled/Loading';
import LoadingPlaceholder from 'components/styled/LoadingPlaceholder';

const useIntersectionObserver = (triggerCallback, rootMargin = '50px') => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          triggerCallback();
        }
      },
      {
        rootMargin: rootMargin,
        threshold: 0,
      }
    );
    return () => {
      observer.disconnect();
    };
  }, [triggerCallback, rootMargin]);
};

const PostPlaceholder = () => {
  const { isLoading, getDcardPosts } = usePost();
  useIntersectionObserver(getDcardPosts);
  return (
    <LoadingPlaceholder>
      {isLoading ? '載入中' : '已載入完畢'}
      {isLoading && <Loading />}
    </LoadingPlaceholder>
  );
};

export default PostPlaceholder;
