import { useEffect, useState } from "react";
import { apiEndPoints } from "../statics/constants";
import { fetchOptions } from "../utils/helpers";

export const useFetchMainContent = () => {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    (async () => {
      const [moviesResponse, tvsResponse, trendingResponse] = await Promise.all(
        [
          fetch(apiEndPoints.movie.popularMovies, fetchOptions()),
          fetch(apiEndPoints.tv.popularTV, fetchOptions()),
          fetch(apiEndPoints.trendingAllDay, fetchOptions()),
        ]
      );

      if (!moviesResponse.ok || !tvsResponse.ok || !trendingResponse.ok)
        throw new Error("error fetching");

      const [moviesData, tvsData, trendingData] = [
        await moviesResponse.json(),
        await tvsResponse.json(),
        await trendingResponse.json(),
      ];

      setMovies(moviesData.results);
      setTvs(tvsData.results);
      setTrending(trendingData.results);
    })();
  }, []);

  return [movies, tvs, trending];
};
