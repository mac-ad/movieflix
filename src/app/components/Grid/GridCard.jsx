import { large } from "../../statics/";

const GridCard = ({ item, type }) => {
  return (
    <div className="grid-card">
      <img src={`${large}${item?.poster_path}`} alt="" />
      {type != "both" ? (
        <div className="content">
          <p className="title">
            {type == "movie" ? item?.original_title : item?.original_name}
          </p>
          <div className="brief">
            <span className="tag bg-primary">{type}</span>
            {type == "movie" && (
              <span className="tag bg-green">2023 -124 min</span>
            )}
          </div>
        </div>
      ) : (
        <div className="content">
          <p className="title"></p>
          <div className="brief">
            <span className="tag bg-primary">movie</span>
            <span className="tag bg-green">2023 -124 min</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GridCard;
