import "./AutoScrollCarousel.css";
import { useNavigate } from "react-router-dom";

const AutoScrollCarousel = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="auto-scroll-carousel-container ">
      <div className="header  wrapper">
        <h2>{title}</h2>
      </div>
      <div className="auto-scroll-carousel">{children}</div>
    </div>
  );
};

export default AutoScrollCarousel;
