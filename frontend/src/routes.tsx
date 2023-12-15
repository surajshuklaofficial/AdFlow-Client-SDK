import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import App from "./App";
import { LandingPage, Advertisers } from "./pages";
import { Dashboard, Login, PublishAd, Signup } from "./features";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/advertiser",
        element: <Advertisers />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "publish-ad",
            element: <PublishAd />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
