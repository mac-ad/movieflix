import { useEffect, useState } from "react";
import { apiEndPoints } from "../statics/constants";
import { fetchOptions, removeDuplicates } from "../utils/helpers";

export const useFetchMainContent = () => {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [trending, setTrending] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvs, setTrendingTvs] = useState([]);
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    (async () => {
      const indexPageMedia = await Promise.all([
        fetch(apiEndPoints.movie.popularMovies, fetchOptions()),
        fetch(apiEndPoints.tv.popularTV, fetchOptions()),
        fetch(apiEndPoints.trendingAllDay, fetchOptions()),
        fetch(apiEndPoints.movie.trendingMovies, fetchOptions()),
        fetch(apiEndPoints.tv.trendingTV, fetchOptions()),
      ]);

      const error = indexPageMedia.some((res) => !res.ok);

      if (error) throw new Error("error fetching");

      const [
        moviesResponse,
        tvsResponse,
        trendingResponse,
        trendingMoviesResponse,
        trendingTvsResponse,
      ] = indexPageMedia;

      const [
        moviesData,
        tvsData,
        trendingData,
        trendingMoviesData,
        trendingTvsData,
      ] = [
        await moviesResponse.json(),
        await tvsResponse.json(),
        await trendingResponse.json(),
        await trendingMoviesResponse.json(),
        await trendingTvsResponse.json(),
      ];

      setMovies(moviesData.results);
      setTvs(tvsData.results);
      setTrending(trendingData.results);
      setTrendingMovies(trendingMoviesData.results);
      setTrendingTvs(trendingTvsData.results);

      // posters only
      const { cleanedItems: poster } = removeDuplicates(
        [
          ...moviesData.results,
          ...trendingMoviesData.results,
          ...trendingTvsData.results,
        ].map((item) => ({
          src: item.poster_path,
          id: item.id,
        }))
      );

      setPosters(poster);
    })();
  }, []);

  return [movies, tvs, trending, trendingMovies, trendingTvs, posters];
};
