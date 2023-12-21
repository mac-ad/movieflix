import React from "react";
import "./Home.css";
import { PrimaryBtn } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>The best website to get info about movies,Tv series for Free!</h1>
      <p className="secondary-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor possimus
        beatae eos recusandae culpa quis! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Laboriosam, praesentium.
      </p>

      <Link to="/home">
        <PrimaryBtn className="button">Open Homepage</PrimaryBtn>
      </Link>
    </div>
  );
};

export default Home;
