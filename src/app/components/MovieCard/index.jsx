import { large, medium, original, small } from "../../statics";

import "./MovieCard.css";

const MovieCard = ({ data, index }) => {
  return (
    <div className="movie-card">
      <img src={`${medium}${data.poster_path}`} alt="" />
      {/* <p className="title">{data.title}</p> */}
    </div>
  );
};

export default MovieCard;
