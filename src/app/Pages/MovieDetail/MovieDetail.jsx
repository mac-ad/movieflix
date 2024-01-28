import { original } from "../../statics";
import PrimaryBtn from "../../components/common/PrimaryBtn";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaLinks, Tag } from "../../components";
import { Link } from "react-router-dom";

import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from "currency-symbol-map";

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
            <img src={`${original}${moviePoster}`} alt="" />
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
              <div className="crew">
                <p>{crew.job}</p>
                <Link to={`/preson/${crew.id}`}>{crew.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="facts wrapper">
        <h2 className="secondary">Facts</h2>
        <ul>
          <li>
            <p className="secondary">Status</p>
            <span>{status}</span>
          </li>
          <li>
            <p className="secondary">Language</p>
            <span>{language}</span>
          </li>
          <li>
            <p className="secondary">Budget</p>
            <span>
              {currency}
              {budget?.toLocaleString()}
            </span>
          </li>
          <li>
            <p className="secondary">Revenue</p>
            <span>
              {currency}
              {revenue?.toLocaleString()}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
