import React from "react";
import { small } from "../../statics/index";
import { StarIcon } from "lucide-react";
import { getRating, getReleaseDate, getReleaseYear } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const SuggestionCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    if (data?.type === "tv") {
    } else {
      navigate(`/movies/${data?.id}`);
    }
  };

  return (
    (data?.backdrop_path || data?.poster_path) && (
      <>
        <div
          className={`suggestion-card transition-all`}
          onClick={clickHandler}
        >
          <div className="detail">
            <div className="detail-before"></div>
            <div>
              {data?.type === "tv" ? data?.original_name : data?.original_title}
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faStar} />
              <span>{getRating(data?.vote_average)}</span>
              <span>{data?.type === "tv" ? "TV" : "MOVIE"}</span>
              <span>
                {getReleaseYear(
                  data?.type === "tv"
                    ? data?.first_air_date
                    : data?.release_date
                )}
              </span>
            </div>
          </div>
          <div className="image">
            {data?.backdrop_path ? (
              <img src={`${small}/${data?.backdrop_path}`} alt="" />
            ) : (
              <img src={`${small}/${data?.poster_path}`} alt="" />
            )}
          </div>
        </div>
      </>
    )
  );
};

export default SuggestionCard;
