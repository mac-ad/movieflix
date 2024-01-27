import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Home, Main, MovieDetailPage } from "./Pages";
import { DetectScroll } from "./HOC";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: "/home",
      element: (
        <MainLayout>
          <Main />
        </MainLayout>
      ),
      children: [
        {
          path: "",
          element: <></>,
        },
        {
          path: "discover",
          element: <></>,
        },
        {
          path: "trending",
          element: <></>,
        },
        {
          path: "top-rated",
          element: <></>,
        },
        {
          path: "search",
          element: <></>,
        },
        {
          path: "recent",
          element: <></>,
        },
      ],
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
    // {
    //   path: "/movies/:movieName/:movieId/",
    //   children: [
    //     {
    //       path: "",
    //       element: <></>,
    //     },
    //     {
    //       path: "castcrew",
    //       element: <></>,
    //     },
    //   ],
    // },
    // {
    //   path: "/person/:personName/:personId",
    //   element: <></>,
    // },
    {
      path: "*",
    },
  ]);

  return routes;
}
