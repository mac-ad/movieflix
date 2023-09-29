import { useState, useEffect, useRef, useContext } from "react";
import {
  CardsContainer,
  FullScreenLoader,
  MovieCard,
  MovieCardSkeleton,
} from "../../components";
import { topRatedMovieUrl } from "../../utils/queryUrls";
import { axiosInstance } from "../../config/axios";
import { useTopRatedMovies } from "../../hooks";
import { GlobalContext } from "../../context";
import { useLocation } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchTopRatedMovies = async ({ pageParam = 1 }) => {
  const res = await axiosInstance({
    method: "get",
    url: `${topRatedMovieUrl}?page=${pageParam}`,
  });

  return {
    ...res.data,
  };
};

const TopRated = () => {
  const [page, setPage] = useState("1");

  const location = useLocation();

  const { scrolledToBottom, resetScroll } = useContext(GlobalContext);

  // const { data, isLoading } = useTopRatedMovies({
  //   page: page,
  // });

  useEffect(() => {
    console.log(location.pathname.split("/").pop(), scrolledToBottom);
    if (scrolledToBottom && location.pathname.split("/").pop() == "top-rated") {
      fetchNextPage();
      resetScroll();
    }
  }, [scrolledToBottom]);

  // const {data,isLoading} = useInfiniteQuery()

  // useEffect(() => {
  //   (async () => {
  //     const data = await fetchTopRatedMovies({
  //       pageParam: 1,
  //     });
  //     console.log(data);
  //   })();
  // }, []);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["topratedmovies"],
      queryFn: fetchTopRatedMovies,
      getNextPageParam: (lastPage) => {
        if (lastPage.page + 1 > lastPage.total_pages) {
          return false;
        }
        return lastPage.page + 1;
      },
    });

  console.log(data, fetchNextPage, hasNextPage);
  const movies = data?.pages.reduce((acc, pages) => {
    return [...acc, ...pages.results];
  }, []);

  const handleClick = () => {
    console.log("loading more");
    fetchNextPage();
  };

  console.log(movies);

  return (
    <>
      <div className="page-container top-rated-container">
        <CardsContainer fetching={isFetchingNextPage}>
          {movies &&
            movies.map((movie, index) => (
              <MovieCard key={`${movie}${index}`} data={movie} />
            ))}
        </CardsContainer>
        {isFetchingNextPage && <FullScreenLoader />}
      </div>
    </>
  );
};

export default TopRated;
