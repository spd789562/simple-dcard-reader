import { createContext } from 'react';
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
  new Array(counts).fill({}).map((_, i) => ({ skeleton: true }));

const PostProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  const [popular, setPopular] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const updatePosts = (appendPost) => {
    setPosts((_posts) =>
      _posts.filter(({ skeleton }) => !skeleton).concat(appendPost)
    );
  };

  const getDcardPosts = async (isFirst = false) => {
    if (!isLoading) {
      setIsLoading(true);
      const lastId = isFirst ? '' : posts[posts.length].id;
      updatePosts(makePostSkeleton(prePage));
      const response = await getPosts(lastId, popular);
      updatePosts(response);
      setIsLoading(false);
    }
  };

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
