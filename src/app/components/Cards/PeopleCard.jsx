import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { large } from "../../statics";
import { getRating } from "../../utils/helpers";

const PeopleCard = ({ data }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.stopPropagation();
    navigate(`/people/${data?.id}`);
  };

  return (
    <div className="card people-card  button-click" onClick={clickHandler}>
      <img src={`${large}${data?.profile_path}`} alt="" />
      {
        <div className="content">
          <p className="title">{data?.title ? data.title : data?.name}</p>
          <div className="brief">
            {/* <span className="tag bg-primary">{type}</span>
              {type == "movie" && (
                <span className="tag bg-green">2023 -124 min</span>
              )} */}
          </div>
        </div>
      }
      {/* <span className="brief__rating">{getRating(data.vote_average)}</span>
      {data?.media_type && (
        <span className="media-type">{data?.media_type?.toUpperCase()}</span>
      )} */}
    </div>
  );
};

export default PeopleCard;
