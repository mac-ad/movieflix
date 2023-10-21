import { forwardRef } from "react";
import "./CardsContainer.css";

const CardsContainer = ({ title, fetching, gap = "1em", children }) => {
  return (
    <div className={`cards-container`}>
      <h2 className="title">{title}</h2>
      <div className="main" style={{ gap: gap }}>
        {children}
      </div>
    </div>
  );
};

export default CardsContainer;
