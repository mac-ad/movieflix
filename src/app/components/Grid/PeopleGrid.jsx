import PeopleCard from "../Cards/PeopleCard";

import "./PeopleGrid.css";

const PeopleGrid = ({ items }) => {
  return (
    <div className={`people-grid-container `}>
      {items.map((item, index) => (
        <PeopleCard key={`${item?.id}${index}`} data={item} />
      ))}
    </div>
  );
};

export default PeopleGrid;
