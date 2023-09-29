import { useNavigate } from "react-router-dom";
import { large, medium, original, small } from "../../statics";

import "./MovieCard.css";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

const MovieCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${data.id}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {/* <img src={`${medium}${data.poster_path}`} alt="" /> */}
      <LazyLoadImage
        key={data.id}
        src={`${medium}${data.poster_path}`}
        alt=""
        // placeholderSrc={`${small}${data.poster_path}`}
      />
      {/* <p className="title">{data.title}</p> */}
    </div>
  );
};

export default MovieCard;
