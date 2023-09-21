import {
  ClockLight,
  ClockSolid,
  CompassLight,
  CompassSolid,
  FireLight,
  FireSolid,
  HomeLight,
  HomeSolid,
  RocketLight,
  RocketSolid,
  SearchLight,
  SearchSolid,
  StarLight,
  StarSolid,
} from "../../icons/";

export const navlist = [
  {
    label: "home",
    to: "/main/",
    iconLight: <HomeLight />,
    iconSolid: <HomeSolid />,
  },
  {
    label: "discover",
    to: "/main/discover",
    iconLight: <CompassLight />,
    iconSolid: <CompassSolid />,
  },
  {
    label: "top rated",
    to: "/main/top-rated",
    iconLight: <StarLight />,
    iconSolid: <StarSolid />,
  },
  {
    label: "trending",
    to: "/main/trending",
    iconLight: <FireLight />,
    iconSolid: <FireSolid />,
  },
  {
    label: "recent",
    to: "/main/recent",
    iconLight: <ClockLight />,
    iconSolid: <ClockSolid />,
  },
  {
    label: "Search",
    to: "/main/search",
    iconLight: <SearchLight />,
    iconSolid: <SearchSolid />,
  },
];
