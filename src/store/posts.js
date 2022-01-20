import { createContext } from 'react';
import { getPosts } from 'api/post';

const prePage = 30;

const PostContext = createContext({
  posts: [],
  isLoading: false,
  getPosts: () => {},
});

const makePostSkeleton = (counts) =>
  new Array(counts).fill({}).map((_, i) => ({ skeleton: true }));

const PostProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const updatePosts = (appendPost) => {
    setPosts((_posts) =>
      _posts.filter(({ skeleton }) => !skeleton).concat(appendPost)
    );
  };

  const getDcardPosts = async (lastId, popular = true) => {
    if (!isLoading) {
      setIsLoading(true);
      updatePosts(makePostSkeleton(prePage));
      const response = await getPosts(lastId, popular);
      updatePosts(response);
      setIsLoading(false);
    }
  };

  /* initial */
  useEffect(() => {
    getDcardPosts();
  }, []);
  git;

  return (
    <PostContext.Provider value={{ posts, isLoading, getDcardPosts }}>
      {children}
    </PostContext.Provider>
  );
};

const usePost = () => React.useContext(PostContext);

export { PostProvider, usePost, PostContext };
