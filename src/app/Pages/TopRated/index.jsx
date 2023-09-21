import { useState, useEffect } from "react";
import { CardsContainer, MovieCard, MovieCardSkeleton } from "../../components";
import { topRatedMovieUrl } from "../../utils/queryUrls";
import { axiosInstance } from "../../config/axios";

const TopRated = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const res = await axiosInstance({
      method: "get",
      url: `${topRatedMovieUrl}?page=${page}`,
    });
    setIsLoading(false);
    setData((prev) => [...prev, ...res.data.results]);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    fetchData();
    fetchData();
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="page-container top-rated-container">
        <CardsContainer>
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
          <MovieCardSkeleton />
        </CardsContainer>
      </div>
    );

  return (
    <div className="page-container top-rated-container">
      <CardsContainer>
        {data
          ? data.map((item, index) => (
              <MovieCard key={`${item}${index}`} data={item} />
            ))
          : null}
      </CardsContainer>
    </div>
  );
};

export default TopRated;
