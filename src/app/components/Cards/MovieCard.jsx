import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { large } from "../../statics";
import { getRating } from "../../utils/helpers";

const MovieCard = ({ data, useImg }) => {
  const cardRef = useRef(null);

  const navigate = useNavigate();

  const clickHandler = (e) => {
    // cardRef.current.addEventListener("transitionend", (e) => {
    //   console.log("animation ended");
    // });
    // navigate(`/movies/${data.id}`);
  };

  return (
    <Link to={`/movies/${data.id}`}>
      <div className="grid-card  button-click" ref={cardRef}>
        {useImg === "backdrop" ? (
          <img src={`${large}${data?.backdrop_path}`} alt="" />
        ) : (
          <img src={`${large}${data?.poster_path}`} alt="" />
        )}
        {
          <div className="content">
            <p className="title">
              {data?.title ? data.title : data?.original_name}
            </p>
            <div className="brief">
              {/* <span className="tag bg-primary">{type}</span>
              {type == "movie" && (
                <span className="tag bg-green">2023 -124 min</span>
              )} */}
            </div>
          </div>
        }
        <span className="brief__rating">{getRating(data.vote_average)}</span>
        {data?.media_type && (
          <span className="media-type">{data?.media_type?.toUpperCase()}</span>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
