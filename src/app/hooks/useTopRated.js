import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../config/axios";
import { topRatedMovieUrl } from "../utils/queryUrls";

const fetchTopRatedMovies = async ({ page = page }) => {
  console.log("query page = ", page);

  return axiosInstance({
    method: "get",
    url: `${topRatedMovieUrl}?page=${page}`,
  });
};

export const useTopRatedMovies = ({ page }) => {
  return useInfiniteQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
    getNextPageParam: (lastPage, page) => lastPage.nextCusor(),
  });
};
