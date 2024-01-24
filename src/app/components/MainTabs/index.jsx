import "./MainTabs.css";
import axios from "axios";
import { Grid } from "../index";
import { useState, useEffect } from "react";
import { mainTabsList } from "../../statics";

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  const fetchMovies = async () => {
    const data = await axios.get("/data/movies.json");
    setMovies(data.data.results);
  };

  const fetchTv = async () => {
    const data = await axios.get("/data/tv.json");
    setTv(data.data.results);
  };

  const tabClickHandler = (e) => {
    const id = e.target.dataset.tabid;
    setActiveTab(id);
  };

  useEffect(() => {
    fetchMovies();
    fetchTv();
  }, []);

  return (
    <div className="mainTabs-container">
      <div className="mainTabs-container__header">
        <h2>Recommended</h2>
        <ul className="tabs">
          {mainTabsList.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={`transparentBgBtn ${activeTab == index && "active"}`}
              data-tabid={index}
              onClick={tabClickHandler}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mainTabs-container__content">
        {activeTab == 0 && (
          <>
            {movies.length > 0 ? (
              <Grid items={movies} type="movie" />
            ) : (
              "...loading"
            )}
          </>
        )}
        {activeTab == 1 && (
          <>{tv.length > 0 ? <Grid items={tv} type="tv" /> : "...loading"}</>
        )}
        {activeTab == 2 && (
          <>
            {movies.length > 0 ? (
              <Grid items={movies} type="both" />
            ) : (
              "...loading"
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MainTabs;
