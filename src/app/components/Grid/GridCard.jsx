import { useNavigate } from "react-router-dom";
import { large } from "../../statics/";

const GridCard = ({ item, type }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(`/movies/${item.id}`);
  };

  return (
    <div className="grid-card" onClick={clickHandler}>
      <img src={`${large}${item?.poster_path}`} alt="" />
      {type != "both" ? (
        <div className="content">
          <p className="title">
            {type == "movie" ? item?.title : item?.original_name}
          </p>
          <div className="brief">
            {/* <span className="tag bg-primary">{type}</span>
            {type == "movie" && (
              <span className="tag bg-green">2023 -124 min</span>
            )} */}
          </div>
        </div>
      ) : (
        <div className="content">
          <p className="title"></p>
          <div className="brief">
            {/* <span className="tag bg-primary">movie</span>
            <span className="tag bg-green">2023 -124 min</span> */}
          </div>
        </div>
      )}
      <span className="brief__rating">{item.vote_average}</span>
    </div>
  );
};

export default GridCard;
