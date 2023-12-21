import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import NormalLink from "../common/NormalLink";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <ul className="list">
          <NormalLink to="#">
            <li>movies</li>
          </NormalLink>
          <NormalLink to="#">
            <li>tv shows</li>
          </NormalLink>
          <NormalLink to="#">
            <li>trending</li>
          </NormalLink>
        </ul>
      </footer>
      <div className="footer-content wrapper">
        <div className="footer-logo">
          <img src="logo.png" alt="" />
        </div>
        <p className="secondary-text">
          HuraMovies is the leading free movie streaming website that allows you
          to watch movies online without the need for registration. With an
          extensive database and impressive features, HuraMovies stands out as
          the ultimate destination for free online movie streaming. Don't
          overlook HuraMovies, as it unquestionably reigns as the premier
          platform in this realm!
        </p>
      </div>
    </div>
  );
};

export default Footer;
