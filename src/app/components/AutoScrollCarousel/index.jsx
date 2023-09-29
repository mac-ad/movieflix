import "./AutoScrollCarousel.css";
import { useNavigate } from "react-router-dom";

const AutoScrollCarousel = ({ title, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // navigate(`/movie/`);
  };

  return (
    <div className="auto-scroll-carousel-container ">
      <div className="header  wrapper">
        <h2>{title}</h2>
        <a onClick={handleClick} className="underline link">
          view all
        </a>
      </div>
      <div className="auto-scroll-carousel">{children}</div>
    </div>
  );
};

export default AutoScrollCarousel;
