import { useNavigate } from "react-router-dom";
import { large, medium, original, small } from "../../statics";

import "./MovieCard.css";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

const MovieCard = ({ data, borderRadius, quality }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let movieName;

    if (data.title.includes("/")) {
      movieName = data.title.split("/").join("-");
    } else {
      movieName = data.title.split(" ").join("-");
    }

    navigate(
      `/movies/${movieName}/${data.id}`
      // , {
      //   state: {
      //     movie_id: data.id,
      //   },
      // }
    );
  };

  return (
    <div
      className="movie-card"
      style={{ borderRadius: borderRadius }}
      onClick={handleClick}
    >
      {/* <img src={`${medium}${data.poster_path}`} alt="" /> */}
      <LazyLoadImage
        key={data.id}
        src={`${quality ? quality : medium}${
          data.poster_path ? data.poster_path : data.backdrop_path
        }`}
        alt=""
        // placeholderSrc={`${small}${data.poster_path}`}
      />
      {/* <p className="title">{data.title}</p> */}
    </div>
  );
};

export default MovieCard;
