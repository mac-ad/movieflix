import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./Layout";
import {
  Discover,
  Home,
  MainHome,
  MovieDetail,
  Recent,
  Search,
  TopRated,
  Trending,
  MovieFullCredits,
  CastCrew,
  Person,
} from "./Pages";
import { DetectScroll } from "./HOC";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      // element: <Home />,
      element: <Navigate to="main/discover" />,
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainHome />,
        },
        {
          path: "discover",
          element: <Discover />,
        },
        {
          path: "trending",
          element: <Trending />,
        },
        {
          path: "top-rated",
          element: <TopRated />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "recent",
          element: <Recent />,
        },
      ],
    },
    {
      path: "/movies/:movieName/:movieId/",
      children: [
        {
          path: "",
          element: <MovieDetail />,
        },
        {
          path: "castcrew",
          element: <CastCrew />,
        },
      ],
    },
    {
      path: "/person/:personName/:personId",
      element: <Person />,
    },
    // {
    //   path: "/movies/:movieId/fullcredits",
    //   element: <MovieFullCredits />,
    // },
    {
      path: "*",
    },
  ]);

  return routes;
}
