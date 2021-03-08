import axios from 'axios';
import { useQuery } from 'react-query';

const getPosts = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      console.error("TODO ESTA MAL");
    });

export default function usePosts() {
  return useQuery("posts", getPosts);
}