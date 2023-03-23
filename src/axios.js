import axios from "axios";

// Creating an axios instance to make GET requests
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 2000,
});

export default instance;
