import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../pages/Main";
// 0421
import NewsSearchResult from "../pages/0421";
import News1 from "../pages/0421/News1";
import News2 from "../pages/0421/News2";
import News3 from "../pages/0421/News3";
// 0425
import Page1 from "../pages/0425/PageOne";
import Page2 from "../pages/0425/PageTwo";
// 0426
import RadioA from "../pages/0426/RadioA";
import RadioB from "../pages/0426/RadioB";
// 0507
import BasketballNews from "../pages/0507/BasketballNews";
// 0510
import DaMedia from "../pages/0510";
// 0514
import Namu0514 from "../pages/0514";
// 0529
import PageOne from "../pages/0529/PageOne";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/0426-a",
    element: <RadioA />,
  },
  {
    path: "/0426-b",
    element: <RadioB />,
  },
  {
    path: "/0421",
    children: [
      {
        path: "",
        element: <NewsSearchResult />,
      },
      {
        path: "news-4",
        element: <News1 />,
      },
      {
        path: "news-5",
        element: <News2 />,
      },
      {
        path: "news-6",
        element: <News3 />,
      },
    ],
  },
  {
    path: "/0425",
    children: [
      {
        path: "page-1",
        element: <Page1 />,
      },
      {
        path: "page-2",
        element: <Page2 />,
      },
    ],
  },
  {
    path: "/0507",
    children: [
      {
        path: "page-2",
        element: <BasketballNews />,
      },
    ],
  },
  {
    path: "/0510",
    element: <DaMedia />,
  },
  {
    path: "/0514",
    element: <Namu0514 />,
  },
  {
    path: "/0529",
    element: <PageOne />,
  },
]);

export default Router;
