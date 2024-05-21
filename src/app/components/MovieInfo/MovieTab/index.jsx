import { useTabs } from "../../../hooks";
import Tabs from "../../Tabs";
import Grid from "../../Grid";
import "./MovieTab.css";
import PosterGrid from "../../Grid/PosterGrid";
import BackdropGrid from "../../Grid/BackdropGrid";
import PeopleGrid from "../../Grid/PeopleGrid";
import Reviews from "./Reviews";

const tabList = [
  {
    key: "cast",
    name: "cast",
    icon: "",
  },
  {
    key: "reviews",
    name: "reviews",
    icon: "",
  },
  {
    key: "backdrop",
    name: "backdrops",
    icon: "",
  },
  {
    key: "poster",
    name: "posters",
    icon: "",
  },
];

const MovieTab = ({ cast, posters, backdrops, reviews }) => {
  const { activeTab, setTab } = useTabs({
    tabLocation: "movieTab",
    defaultState: "cast",
  });

  return (
    <div className="movie-tabs-wrapper wrapper-1">
      <div className="movie-tabs__header">
        <Tabs tabList={tabList} currentTab={activeTab} setTab={setTab} />
      </div>
      <div className="movie-tabs__content wrapper-full">
        {activeTab === "cast" && <PeopleGrid type="people" items={cast} />}
        {activeTab === "poster" && <PosterGrid items={posters} />}
        {activeTab === "reviews" && <Reviews items={reviews} />}
        {activeTab === "backdrop" && <BackdropGrid items={backdrops} />}
      </div>
    </div>
  );
};

export default MovieTab;
