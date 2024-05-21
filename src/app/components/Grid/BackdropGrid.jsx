import BackdropCard from "../Cards/BackdropCard";
import "./BackdropGrid.css";

const BackdropGrid = ({ items }) => {
  return (
    <div className="backdrop-grid-container">
      {items.map((item, index) => (
        <BackdropCard key={`${item?.id}${index}`} data={item} />
      ))}
    </div>
  );
};

export default BackdropGrid;
