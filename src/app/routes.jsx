import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./Layout";
import {
  Discover,
  Home,
  MainHome,
  Recent,
  Search,
  TopRated,
  Trending,
} from "./Pages";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
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
      path: "*",
    },
  ]);

  return routes;
}
