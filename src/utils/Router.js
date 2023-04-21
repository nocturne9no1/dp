import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import NewsSearchResult from "../pages/NewsSearchResult";
import React from "react";
import News1 from "../pages/News1";
import News2 from "../pages/News2";
import News3 from "../pages/News3";

const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Main />,
  // },
  {
    path: "/",
    element: <NewsSearchResult />,
  },
  {
    path: "/news-4",
    element: <News1 />,
  },
  {
    path: "/news-5",
    element: <News2 />,
  },
  {
    path: "/news-6",
    element: <News3 />,
  },
]);

export default Router;
