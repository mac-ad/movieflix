import { useEffect, useState } from "react";
import {
  fetchOptions,
  getRating,
  getReleaseDate,
  getReleaseYear,
  getRuntime,
} from "../utils/helpers";
import { apiEndPoints } from "../statics/constants";
import { useParams } from "react-router-dom";

export const useGetMovieDetail = ({ movieId }) => {
  const { movieId: id } = useParams();

  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    (async () => {
      console.log("getting movie detail");

      const [movieResponse, languagesResponse] = await Promise.all([
        fetch(apiEndPoints.movie.movieDetails(movieId), fetchOptions()),
        fetch(apiEndPoints.language, fetchOptions()),
      ]);
      if (!movieResponse.ok) throw new Error("error fetching details");
      const [movieDetails, languages] = await Promise.all([
        movieResponse.json(),
        languagesResponse.json(),
      ]);

      const country =
        movieDetails?.production_companies[0]?.origin_country || "US";
      const releaseYear = getReleaseYear(movieDetails?.release_date);
      const releaseDate = getReleaseDate(movieDetails?.release_date);
      const status = movieDetails?.status || "TBA";
      const language = languages.find(
        (item) => item.iso_639_1 === movieDetails?.original_language
      );

      const rating = getRating(movieDetails?.vote_average);

      const runtime = getRuntime(movieDetails?.runtime);

      const trailer = movieDetails?.videos?.results?.find(
        (item) =>
          item?.site.toLowerCase() === "youtube" &&
          item?.type.toLowerCase() === "trailer"
      );

      const crewData = [
        ...movieDetails?.credits?.crew?.filter(
          (credit) => credit?.job.toLowerCase() === "director"
        ),
        ...movieDetails?.credits?.crew?.filter(
          (credit) => credit?.job.toLowerCase() === "writer"
        ),
        // ...movieDetails?.credits?.crew?.filter(
        //   (credit) => credit?.job.toLowerCase() === "characters"
        // ),
      ];

      const detail = {
        id: movieDetails?.id,
        title: movieDetails?.title,
        genres: movieDetails?.genres,
        tagline: movieDetails?.tagline,
        overview: movieDetails?.overview,
        moviePoster: movieDetails?.poster_path,
        backdropPath: movieDetails?.backdrop_path,
        trailerLink: trailer?.key ?? "",
        socialIds: movieDetails?.external_ids,
        homepage: movieDetails?.homepage,
        language: language?.english_name || language?.name || "TBA",
        budget: movieDetails?.budget,
        revenue: movieDetails?.revenue,
        cast: {
          totalCount: movieDetails?.credits?.cast?.length,
          data: movieDetails?.credits?.cast?.slice(0, 15),
        },
        isEasterMovie: movieDetails?.id === 345911,
        reviews: movieDetails?.reviews?.results ?? [],
        backdrops: movieDetails?.images?.backdrops ?? [],
        posters: movieDetails?.images?.posters ?? [],
        recommendations: movieDetails?.recommendations?.results,
        releaseYear,
        releaseDate,
        status,
        crewData,
        runtime,
        rating,
        country,
      };

      console.log("got movie detail", movieDetail);

      setMovieDetail(detail);
    })();
  }, [id]);

  return [movieDetail];
};
