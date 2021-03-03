import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const PostsContext = createContext();

const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("TODO ESTA MAL");
      });
  }, []);

  return (
    <>
      <PostsContext.Provider 
        value={{ posts }}
      >
        {props.children}
      </PostsContext.Provider>
    </>
  );
}

export default PostsProvider;