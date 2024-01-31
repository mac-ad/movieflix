import { useParams } from "react-router-dom";
import { apiEndPoints } from "../../statics/constants";
import { useEffect } from "react";
import { useState } from "react";
import { fetchOptions } from "../../utils/helpers";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import { MovieDetail } from "../../components";
import { motion } from "framer-motion";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const [movieDetail] = useGetMovieDetail({ movieId });

  useEffect(() => {
    // window.scrollTo(0, 0);
  });

  if (Object.keys(movieDetail).length <= 0) return "...loading";

  return (
    <div className="movieDetailPage-container">
      <MovieDetail {...movieDetail} />
    </div>
  );
};

export default MovieDetailPage;
