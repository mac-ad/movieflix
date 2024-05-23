import { medium, small } from "../../statics";

const BackdropHeroBanner = ({ posters = [] }) => {
  return (
    <div className="backdrop-hero-banner-container">
      {/* {posters.map(({ id, src }) => (
        <img src={`${medium}${src}`} alt="" />
      ))}
      {posters.map(({ id, src }) => (
        <img src={`${medium}${src}`} alt="" />
      ))} */}
    </div>
  );
};

export default BackdropHeroBanner;
