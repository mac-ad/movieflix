import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from "currency-symbol-map";
import { medium, original, small } from "../../../statics";
import PrimaryBtn from "../../common/PrimaryBtn";
import SocialMediaLinks from "../../SocialMediaLinks";

import "./MovieDetail.css";
import { Facts } from "./Facts";
import MovieTab from "../MovieTab";
import Tag from "../../Tag";
import MovieRecommendations from "./MovieRecommendations";

const MovieDetail = ({
  id,
  title,
  genres,
  runtime,
  tagline,
  overview,
  rating,
  moviePoster,
  backdropPath,
  trailerLink,
  socialIds,
  homepage,
  language,
  budget,
  revenue,
  cast,
  isEasterMovie,
  reviews,
  backdrops,
  posters,
  recommendations,
  releaseYear,
  releaseDate,
  status,
  country,
  crewData,
}) => {
  const countryCode = countryToCurrency[country];
  const currency = getSymbolFromCurrency(countryCode);

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-container__backdrop">
        <img src={`${original}${backdropPath}`} alt="" />
      </div>
      <div className="movie-detail-container__content wrapper">
        <div className="main__content">
          <div className="poster">
            <img src={`${medium}${moviePoster}`} alt="" />
          </div>
          <div className="actions">
            <a
              href={`https://www.youtube.com/watch?v=${trailerLink}`}
              target="_blank"
            >
              <PrimaryBtn
                text="Watch Trailer"
                icon={<FontAwesomeIcon icon={faYoutube} />}
              />
            </a>
            <div className="social-links">
              <SocialMediaLinks links={socialIds} />
            </div>
          </div>
        </div>
        <div className="movie__details">
          <h2 className="title">
            <span>{title}</span>
            <span>({releaseYear})</span>
          </h2>
          <div className="flex">
            <div>
              <span className="date">{releaseDate}</span>
              <span className="runtime">({runtime})</span>
            </div>
            <span className="genre">
              {genres?.map((item) => (
                <Link key={item.id} to="/genre/drama">
                  <Tag name={item.name} />
                </Link>
              ))}
            </span>
          </div>
          <i className="tag-line">{tagline}</i>
          <p className="overview">{overview}</p>
          <div className="rating">
            <h2>{rating}</h2>
            <div className="secondary">
              <h3>/10</h3>
            </div>
          </div>
          <div className="crew-container">
            {crewData?.map((crew) => (
              <div key={crew.id} className="crew">
                <p>{crew.job}</p>
                <Link to={`/preson/${crew.id}`}>{crew.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Facts
        budget={budget}
        currency={currency}
        revenue={revenue}
        language={language}
        status={status}
      />
      <MovieTab
        cast={cast?.data}
        posters={posters}
        backdrops={backdrops}
        reviews={reviews}
      />
      <div className="wrapper">
        {recommendations.length > 0 && (
          <MovieRecommendations movies={recommendations} />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
