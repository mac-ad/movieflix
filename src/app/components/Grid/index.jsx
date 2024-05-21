import { medium } from "../../statics";
import MovieCard from "../Cards/MovieCard";
import PeopleCard from "../Cards/PeopleCard";
import PosterCard from "../Cards/PosterCard";
import TvCard from "../Cards/TvCard";
import "./Grid.css";
import PosterGrid from "./PosterGrid";

const Grid = ({ items, type, useImg }) => {
  console.log(items);
  return (
    <div className={`grid-container`}>
      {/* {items.map((item) => (
        <GridCard key={`${item.id}`} type={type} item={item} />
      ))} */}
      {type === "movie" && (
        <>
          {items.map((item) => (
            <MovieCard key={`${item.id}`} data={item} />
          ))}
        </>
      )}
      {type === "tv" && (
        <>
          {items.map((item) => (
            <TvCard key={`${item.id}`} data={item} />
          ))}
        </>
      )}
      {type === "both" && (
        <>
          {items.map((item) =>
            item.media_type === "movie" ? (
              <MovieCard key={`${item.id}`} data={item} />
            ) : (
              <TvCard key={`${item.id}`} data={item} />
            )
          )}
        </>
      )}

      {type === "people" && (
        <>
          {items.map((item) => (
            <PeopleCard key={`${item.id}`} data={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default Grid;
