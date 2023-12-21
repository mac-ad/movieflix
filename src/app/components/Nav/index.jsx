import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./nav.css";
import Button1 from "../common/Button1";

const Nav = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const mobileNavHandler = () => {
    setShowMobNav((prev) => !prev);
  };

  const showSearchHandler = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="nav-container">
      <nav className="wrapper">
        <div>
          <div className="burger" onClick={mobileNavHandler}>
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
        </div>
        <ul className="nav-list desktop">
          <li>browse</li>
          <li>movies</li>
          <li>tv shows</li>
        </ul>
        <Button1 className="search-icon icon" onClick={showSearchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </Button1>
        <div className={`search-container ${showSearch ? "visible" : ""}`}>
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="Search" />
          <button className="filter-icon">Filter</button>
        </div>
        <div className="overlay" onClick={showSearchHandler}></div>
        <div className="search-container-desktop">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="Search" />
          <button className="filter-icon">Filter</button>
        </div>
      </nav>
      <ul className={`nav-list mobile ${showMobNav ? "visible" : ""}`}>
        <li>browse</li>
        <li>movies</li>
        <li>tv shows</li>
      </ul>
    </div>
  );
};

export default Nav;
