import "./CardsContainer.css";

const CardsContainer = ({ title, children }) => {
  return (
    <div className="cards-container">
      <h2 className="title">{title}</h2>
      <div className="main">{children}</div>
    </div>
  );
};

export default CardsContainer;
