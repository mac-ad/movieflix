import { DownloadIcon } from "@radix-ui/react-icons";
import PosterCard from "../Cards/PosterCard";

import "./PosterGrid.css";

const PosterGrid = ({ items }) => {
  return (
    <div className={`poster-grid-container `}>
      {items.map((item, index) => (
        <PosterCard key={`${item?.id}${index}`} data={item} />
      ))}
    </div>
  );
};

export default PosterGrid;
