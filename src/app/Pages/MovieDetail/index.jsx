import React from "react";
import { medium, original, small } from "../../statics/";

import "./MovieDetail.css";
import { CompanyLogo, Tag } from "../../components";
import CastCrew from "./CastCrew";

const MovieDetail = () => {
  return (
    <div className="movie-detail-page-container">
      <div
        className="poster-part-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.7), rgba(16, 16, 16,1)) , url(${small}${data.backdrop_path})`,
        }}
      >
        <div className="main wrapper">
          <div className="detail">
            <div className="header">
              <h2 className="title">{data.title}</h2>
              <ul className="brief secondary">
                <li>{data.release_date.split("-")[0]}</li>
                <li>{data.runtime}min</li>
              </ul>
            </div>
            <div className="detail-main">
              <div className="poster">
                <img src={`${original}${data.poster_path}`} alt="" />
              </div>
              <div className="infos">
                <div className="genres">
                  {data.genres.map((genre) => (
                    <Tag name={genre.name} />
                  ))}
                </div>
                <p className="overview secondary-text">{data.overview}</p>
                <div className="production-companies">
                  {data.production_companies.map((company) =>
                    company.logo_path ? (
                      <CompanyLogo logoPath={company.logo_path} />
                    ) : null
                  )}
                </div>
              </div>
            </div>
            {/* <button className="btn-1">watch trailer</button> */}
          </div>
        </div>
      </div>
      <CastCrew movieId={data.id} />
      {/* <div className="actors-part-container"></div>
      <div className="movie-images-container"></div>
      <div className="similar-movies-container"></div> */}
    </div>
  );
};

export default MovieDetail;

const data = {
  adult: false,
  backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
  belongs_to_collection: {
    id: 939352,
    name: "Transformers: Rise of the Beasts Collection",
    poster_path: "/6sAdtwp5LV0jlNVhefTMEsjP7py.jpg",
    backdrop_path: null,
  },
  budget: 195000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "https://www.transformersmovie.com",
  id: 667538,
  imdb_id: "tt5090568",
  original_language: "en",
  original_title: "Transformers: Rise of the Beasts",
  overview:
    "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
  popularity: 650.789,
  poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
  production_companies: [
    {
      id: 82819,
      logo_path: "/gXfFl9pRPaoaq14jybEn1pHeldr.png",
      name: "Skydance",
      origin_country: "US",
    },
    {
      id: 4,
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
      name: "Paramount",
      origin_country: "US",
    },
    {
      id: 435,
      logo_path: "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png",
      name: "di Bonaventura Pictures",
      origin_country: "US",
    },
    {
      id: 6734,
      logo_path: null,
      name: "Bay Films",
      origin_country: "US",
    },
    {
      id: 114732,
      logo_path: "/tNCbisMxO5mX2X2bOQxHHQZVYnT.png",
      name: "New Republic Pictures",
      origin_country: "US",
    },
    {
      id: 38831,
      logo_path: null,
      name: "Tom DeSanto/Don Murphy Production",
      origin_country: "",
    },
    {
      id: 2598,
      logo_path: "/i42C5gRq7XqlG4S9vkchuJZfrBn.png",
      name: "Hasbro",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2023-06-06",
  revenue: 429800000,
  runtime: 127,
  spoken_languages: [
    {
      english_name: "Quechua",
      iso_639_1: "qu",
      name: "",
    },
    {
      english_name: "Spanish",
      iso_639_1: "es",
      name: "Español",
    },
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Unite or fall.",
  title: "Transformers: Rise of the Beasts",
  video: false,
  vote_average: 7.5,
  vote_count: 3191,
};
