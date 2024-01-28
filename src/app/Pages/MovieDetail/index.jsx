import { useParams } from "react-router-dom";
import { apiEndPoints } from "../../statics/constants";
import "./MovieDetail.css";
import { useEffect } from "react";
import { useState } from "react";
import { fetchOptions } from "../../utils/helpers";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import MovieDetail from "./MovieDetail";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const [movieDetail] = useGetMovieDetail({ movieId });

  return (
    <div className="movieDetailPage-container">
      <MovieDetail {...movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
