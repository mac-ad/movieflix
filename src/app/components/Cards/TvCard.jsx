import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { large } from "../../statics";
import { getRating } from "../../utils/helpers";

const TvCard = ({ data }) => {
  const cardRef = useRef(null);

  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/tv/${data.id}`);
  };

  return (
    <div
      className="grid-card  button-click"
      ref={cardRef}
      onClick={clickHandler}
    >
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
  );
};

export default TvCard;
