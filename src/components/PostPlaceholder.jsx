import { useEffect, createRef } from 'react';
import { usePost } from 'store/posts';

import Loading from 'components/styled/Loading';
import LoadingPlaceholder from 'components/styled/LoadingPlaceholder';

const useIntersectionObserver = (ref, triggerCallback, rootMargin = '50px') => {
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
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [triggerCallback, rootMargin]);
};

const PostPlaceholder = () => {
  const { isLoading, getDcardPosts } = usePost();
  const ref = createRef();
  useIntersectionObserver(ref, getDcardPosts);
  return (
    <LoadingPlaceholder ref={ref}>
      {isLoading ? '載入中' : '已載入完畢'}
      {isLoading && <Loading />}
    </LoadingPlaceholder>
  );
};

export default PostPlaceholder;
