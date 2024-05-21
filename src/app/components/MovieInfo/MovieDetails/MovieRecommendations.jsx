import Grid from "../../Grid";

const MovieRecommendations = ({ movies }) => {
  return (
    <div className="recommendations-container">
      <h1>Recommendations</h1>
      <Grid type="movie" items={movies} />
    </div>
  );
};

export default MovieRecommendations;
