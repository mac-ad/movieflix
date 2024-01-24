import "./Grid.css";
import GridCard from "./GridCard";

const Grid = ({ items, type }) => {
  return (
    <div className="grid-container">
      {items.map((item) => (
        <GridCard key={`${item.id}`} type={type} item={item} />
      ))}
    </div>
  );
};

export default Grid;
