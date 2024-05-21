import axios from "axios";
import { api_key } from "../utils/queryUrls";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const token = api_key;

axiosInstance.interceptors.request.use((req) => {
  req.headers["Authorization"] = `Bearer ${token}`;
  req.headers["Content-Type"] = `application/json`;
  return req;
});
