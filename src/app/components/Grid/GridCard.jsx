import { useNavigate } from "react-router-dom";
import { large } from "../../statics/";
import { getRating } from "../../utils/helpers";

const GridCard = ({ item, type }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div className="grid-card" onClick={clickHandler}>
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
      {type === "both" && <span className="type">{item.media}</span>}
    </div>
  );
};

export default GridCard;
