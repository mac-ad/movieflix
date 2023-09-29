import { forwardRef } from "react";
import "./CardsContainer.css";

const CardsContainer = ({ title, fetching, gap, children }) => {
  return (
    <div
      style={{ gap: gap }}
      className={` ${fetching ? "dim" : ""} cards-container`}
    >
      <h2 className="title">{title}</h2>
      <div className="main">{children}</div>
    </div>
  );
};

export default CardsContainer;
