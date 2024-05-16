import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Home";
import NamePage from "../pages/NameRanking";
import LocationPage from "../pages/LocationData";
import NotFound from "../pages/NotFound";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: [<Header key={1} />, <Outlet key={2} />, <Footer key={3} />],
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "names",
        element: <NamePage />,
      },
      {
        path: "location",
        element: <LocationPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
