import axios from 'axios';
import { useQuery } from 'react-query';

const getPosts = () =>
  axios
    .get("http://localhost:4000/api/posts")
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      console.error("Ocurrio un error al intentar traer los posts");
    });

export default function usePosts() {
  return useQuery("posts", getPosts);
}