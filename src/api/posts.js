import axios from "@/api/index.js";

const getPosts = (apiUrl) => {
  return axios.get(apiUrl).then((response) => response.data);
};

export default {
  getPosts,
};
