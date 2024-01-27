import "./Main.css";

import React, { useEffect, useState } from "react";
import { Carousel, MainTabs } from "../../components";

import MainCarousel from "./MainCarousel";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  const fetchMovies = async () => {
    const data = await axios.get("/data/movies.json");
    setMovies(data.data.results);
  };

  const fetchTv = async () => {
    const data = await axios.get("/data/tv.json");
    setTv(data.data.results);
  };

  useEffect(() => {
    fetchMovies();
    fetchTv();
  }, []);

  return (
    <div className="main-container">
      <div className="wrapper-1">
        <MainCarousel />
      </div>
      <div className="wrapper-2">
        <MainTabs />
      </div>
      {/* <div className="main__carousel-container latest-movies-carousel-container">
        <h2 className="main__carousel-container__title wrapper-1">
          Latest Movies
        </h2>
        <div className="carousel-main wrapper-1">
          <Carousel items={movies} type="movie" />
        </div>
      </div>
      <div className="main__carousel-container latest-movies-carousel-container">
        <h2 className="main__carousel-container__title wrapper-1">Latest Tv</h2>
        <div className="carousel-main wrapper-1">
          <Carousel items={tv} type="tv" />
        </div>
      </div> */}
    </div>
  );
};

export default Main;
