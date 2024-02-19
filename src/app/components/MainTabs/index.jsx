import "./MainTabs.css";
import axios from "axios";
import { Grid, Tabs } from "../index";
import { useState, useEffect } from "react";
import { mainTabsList } from "../../statics";
import { useNavigate } from "react-router-dom";
import { useTabs } from "../../hooks/index";

import { AnimatePresence, motion } from "framer-motion";
import { MinHeightContainer } from "../../HOC/MinHeightContainer";

const tabList = [
  {
    key: "movies",
    name: "movies",
  },
  {
    key: "tv",
    name: "tv shows",
  },
  {
    key: "trending",
    name: "trending",
  },
];

const MainTabs = ({ movies, tvs, trending, trendingMovies, trendingTvs }) => {
  // const [activeTab, setActiveTab] = useState("movies");
  const { activeTab, setTab } = useTabs({
    tabLocation: "mainTab",
    defaultState: "movies",
  });

  const navigate = useNavigate();

  const tabClickHandler = (e) => {
    const id = e.target.dataset.tabkey;
    setTab(id);
  };

  return (
    <div className="mainTabs-container">
      <div className="mainTabs-container__header">
        {/* <ul className="tabs">
          {mainTabsList.map((item, index) => (
            <li
              key={`${item}${index}`}
              className={`transparentBgBtn ${activeTab == item && "active"}`}
              data-tabkey={item}
              onClick={tabClickHandler}
            >
              {item}
            </li>
          ))}
        </ul> */}
        <Tabs tabList={tabList} currentTab={activeTab} setTab={setTab} />
      </div>
      <AnimatePresence initial={false} mode="wait">
        <div className="mainTabs-container__content">
          {activeTab == "movies" && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8 }}
            >
              {/* <MinHeightContainer height="100vh"> */}
              <h1>What's Popular</h1>
              <Grid items={movies} type="movie" />
              {/* </MinHeightContainer> */}
              {/* <MinHeightContainer height="100vh"> */}
              <h1>Trending Today</h1>
              <Grid items={trendingMovies} type="movie" />
              {/* </MinHeightContainer> */}
            </motion.div>
          )}
          {activeTab == "tv" && (
            <>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.8 }}
              >
                {/* <MinHeightContainer height="100vh"> */}
                <h1>What's Popular</h1>
                <Grid items={tvs} type="tv" />
                {/* </MinHeightContainer> */}
                {/* <MinHeightContainer height="100vh"> */}
                <h1>Trending Today</h1>
                <Grid items={trendingTvs} type="tv" />
                {/* </MinHeightContainer> */}
              </motion.div>
            </>
          )}
          {activeTab == "trending" && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8 }}
            >
              {/* <MinHeightContainer height="100vh"> */}
              <h1>What&#39;s Trending</h1>
              <Grid items={trending} type="both" />
              {/* </MinHeightContainer> */}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default MainTabs;
