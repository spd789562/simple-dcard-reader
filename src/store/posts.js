import React, { createContext, useEffect } from 'react';
import { getPosts } from 'api/post';

const prePage = 30;

const PostContext = createContext({
  posts: [],
  isLoading: false,
  popular: true,
  getPosts: () => {},
  setPopular: () => {},
});

const makePostSkeleton = (counts) =>
  new Array(counts)
    .fill({})
    .map((_, i) => ({ id: new Date().getTime() + i, skeleton: true }));

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const PostProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const [popular, setPopular] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const updatePosts = (appendPost) => {
    setPosts((_posts) =>
      _posts
        .filter(({ skeleton }) => !skeleton)
        .concat(
          appendPost.filter(
            ({ id }) => !_posts.find(({ id: existId }) => id === existId)
          )
        )
    );
  };

  const getDcardPosts = async (isFirst = false) => {
    if (!isLoading) {
      setIsLoading(true);
      const lastId = isFirst ? '' : posts[posts.length - 1].id;
      updatePosts(makePostSkeleton(prePage));
      /* force wait to see skeleton */
      await sleep(2000);
      const response = await getPosts(lastId, popular);
      updatePosts(response);
      setIsLoading(false);
    }
  };

  /* popular change clear post and recall getDcardPosts */

  /* initial */
  useEffect(() => {
    getDcardPosts(true);
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, popular, isLoading, getDcardPosts, setPopular }}
    >
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => React.useContext(PostContext);

export { PostProvider, usePost, PostContext };
