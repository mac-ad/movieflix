import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { large } from "../../statics";
import { getRating } from "../../utils/helpers";

const TvCard = ({ data }) => {
  const cardRef = useRef(null);

  const navigate = useNavigate();

  return (
    <Link to="#">
      <div className="card tv-card button-click" ref={cardRef}>
        <img src={`${large}${data?.poster_path}`} alt="" />
        {
          <div className="content">
            <p className="title">
              {data?.title ? data.title : data?.original_name}
            </p>
            <div className="brief"></div>
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

export default TvCard;
