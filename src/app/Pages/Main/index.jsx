import "./Main.css";

import React, { useEffect, useState } from "react";
import { Carousel, Hero, MainTabs } from "../../components";

import MainCarousel from "./MainCarousel";
import axios from "axios";
import { useFetchMainContent } from "../../hooks";
import BackdropHeroBanner from "../../components/Hero/BackdropHeroBanner";
import Loading from "../../components/Loading";

const Main = () => {
  const [movies, tvs, trending, trendingMovies, trendingTvs, posters] =
    useFetchMainContent();

  return (
    <div className="main-container">
      <div className="wrapper-1">{/* <MainCarousel /> */}</div>

      {/* hero section search and backdrop posters */}
      <Hero banner={<BackdropHeroBanner posters={posters} />} />

      <div className="wrapper-2">
        <MainTabs
          movies={movies}
          tvs={tvs}
          trending={trending}
          trendingMovies={trendingMovies}
          trendingTvs={trendingTvs}
        />
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
