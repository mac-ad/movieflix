import React from "react";
import "./CardsCarousel.css";

const CardsCarousel = ({ children }) => {
  return (
    <div className="cards-carousel cards-carousel-container">{children}</div>
  );
};

export default CardsCarousel;
