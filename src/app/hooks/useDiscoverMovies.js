import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/axios";
import { discoverMovieUrl } from "../utils/queryUrls";

const fetchDiscoverMovies = async () => {
  return axiosInstance({
    method: "get",
    url: `${discoverMovieUrl}`,
  });
};

export const useDiscoverMovies = () => {
  return useQuery(["discovermovies"], fetchDiscoverMovies);
};
