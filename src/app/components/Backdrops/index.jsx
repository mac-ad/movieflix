import "./Backdrops.css";

const Backdrops = ({ backdrops }) => {
  return (
    <>
      {backdrops?.length > 0 ? (
        <div className="backdrops-container">backdrop</div>
      ) : null}
    </>
  );
};

export default Backdrops;
