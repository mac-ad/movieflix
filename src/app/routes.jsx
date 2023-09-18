import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Discover, Home, Search, TopRated, Trending } from "./Pages";

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
      ],
    },
  ]);

  return routes;
}
