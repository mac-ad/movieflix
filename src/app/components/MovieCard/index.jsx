import { useNavigate } from "react-router-dom";
import { large, medium, original, small } from "../../statics";

import "./MovieCard.css";

const MovieCard = ({ data, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movie/298618");
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={`${medium}${data.poster_path}`} alt="" />
      {/* <p className="title">{data.title}</p> */}
    </div>
  );
};

export default MovieCard;
