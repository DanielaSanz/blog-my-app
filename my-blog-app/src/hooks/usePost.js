import axios from 'axios';
import { useQuery } from 'react-query';

const getPost = (postId) => {
  
  return axios
    .get(`http://localhost:4000/api/posts/${postId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("TODO ESTA MAL");
    });
};

export default function usePost(postId) {
  return useQuery(["post", postId], () => getPost(postId));
}