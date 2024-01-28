import "./MainTabs.css";
import axios from "axios";
import { Grid } from "../index";
import { useState, useEffect } from "react";
import { mainTabsList } from "../../statics";
import { useNavigate } from "react-router-dom";
import { useFetchMainContent } from "../../hooks/index";

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [movies, tvs, trending] = useFetchMainContent();

  const navigate = useNavigate();

  const tabClickHandler = (e) => {
    const id = e.target.dataset.tabid;
    setActiveTab(id);
  };

  console.log(movies, tvs, trending);

  return (
    <div className="mainTabs-container">
      <div className="mainTabs-container__header">
        <h2>Popular</h2>
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
            {movies?.length > 0 ? (
              <Grid items={movies} type="movie" />
            ) : (
              "...loading"
            )}
          </>
        )}
        {activeTab == 1 && (
          <>{tvs?.length > 0 ? <Grid items={tvs} type="tv" /> : "...loading"}</>
        )}
        {activeTab == 2 && (
          <>
            {trending?.length > 0 ? (
              <Grid items={trending} type="both" />
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
