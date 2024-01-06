import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import App from "./App";
import { Home, Advertisers, Publishers, ErrorPage } from "./pages";
import {
  Dashboard,
  Login,
  PublishAd,
  Signup,
  ProtectedAdvertiser,
  ProtectedPublisher,
  PublisherDashboard,
  AdDetails,
  Account,
  AdUnit,
  CreateInFeed,
  Sites
} from "./features";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
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
        element: (
          <ProtectedAdvertiser>
            <Advertisers />
          </ProtectedAdvertiser>
        ),
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
          {
            path: "ad-details/:id",
            element: <AdDetails />,
          },
          {
            path: "account",
            element: <Account />,
          },
        ],
      },
      {
        path: "/publisher",
        element: (
          <ProtectedPublisher>
            <Publishers />
          </ProtectedPublisher>
        ),
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <PublisherDashboard /> },
          {
            path: "dashboard",
            element: <PublisherDashboard />,
          },
          {
            path: "your-site",
            element: <Sites />
          },
          {
            path: "ad-units",
            element: <AdUnit />,
          },
          {
            path: "create-ad-unit/in-feed",
            element: <CreateInFeed />,
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
