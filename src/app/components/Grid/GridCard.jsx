import { useNavigate } from "react-router-dom";
import { large } from "../../statics/";
import { getRating } from "../../utils/helpers";
import { useEffect, useRef } from "react";

const GridCard = ({ item, type }) => {
  const cardRef = useRef(null);

  const navigate = useNavigate();

  const clickHandler = (e) => {
    // cardRef.current.addEventListener("transitionend", (e) => {
    //   console.log("animation ended");
    // });
    // navigate(`/movies/${item.id}`);
  };

  useEffect(() => {}, []);

  return (
    <div
      className="grid-card  button-click"
      ref={cardRef}
      onClick={clickHandler}
    >
      <img src={`${large}${item?.poster_path}`} alt="" />
      {
        <div className="content">
          <p className="title">
            {item?.title ? item.title : item?.original_name}
          </p>
          <div className="brief">
            {/* <span className="tag bg-primary">{type}</span>
            {type == "movie" && (
              <span className="tag bg-green">2023 -124 min</span>
            )} */}
          </div>
        </div>
      }
      <span className="brief__rating">{getRating(item.vote_average)}</span>
      {type === "both" && (
        <span className="media-type">{item?.media_type?.toUpperCase()}</span>
      )}
    </div>
  );
};

export default GridCard;
