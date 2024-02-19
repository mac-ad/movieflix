import { useParams } from "react-router-dom";
import { apiEndPoints } from "../../statics/constants";
import { useEffect } from "react";
import { useState } from "react";
import { fetchOptions } from "../../utils/helpers";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import { MovieDetail } from "../../components";
import { motion } from "framer-motion";

import Loading from "../../components/Loading";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const [movieDetail, loading] = useGetMovieDetail({ movieId });

  if (loading) return <Loading />;

  return (
    <div className="movieDetailPage-container">
      {Object.keys(movieDetail).length > 0 && <MovieDetail {...movieDetail} />}
    </div>
  );
};

export default MovieDetailPage;
