import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Home, Main, MovieDetailPage } from "./Pages";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import PeopleDetailPage from "./Pages/PeopleDetailPage/PeopleDetailPage";

// const Home = React.lazy(() => import("./Pages/Home"));
// const Main = React.lazy(() => import("./Pages/Main"));
// const MovieDetailPage = React.lazy(() => import("./Pages/MovieDetailPage"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    {
      path: "/home",
      element: (
        <MainLayout>
          <Main />
        </MainLayout>
      ),
    },
    {
      path: "/movies/:movieId",
      children: [
        {
          path: "",
          element: (
            <MainLayout>
              <MovieDetailPage />
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "/people/:peopleId",
      children: [
        {
          path: "",
          element: (
            <MainLayout>
              <PeopleDetailPage />
            </MainLayout>
          ),
        },
      ],
    },
    {
      path: "*",
    },
  ]);

  return routes;
}
