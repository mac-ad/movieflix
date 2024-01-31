import "./Hero.css";

const Hero = ({ banner = null }) => {
  return (
    <div className="hero-container wrapper-full">{banner ? banner : null}</div>
  );
};

export default Hero;
