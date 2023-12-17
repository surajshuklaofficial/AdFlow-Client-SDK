import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";

import App from "./App";
import { LandingPage, Advertisers, Publishers } from "./pages";
import {
  Dashboard,
  Login,
  PublishAd,
  Signup,
  ProtectedAdvertiser,
  ProtectedPublisher,
  PublisherPublishAd,
  PublisherDashboard,
  AdDetails,
  Error
} from "./features";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
            element: <AdDetails />
          }
        ],
      },
      {
        path: "/publisher",
        element: (
          <ProtectedPublisher>
            <Publishers />
          </ProtectedPublisher>
        ),
        children: [
          { index: true, element: <PublisherDashboard /> },
          {
            path: "dashboard",
            element: <PublisherDashboard />,
          },
          {
            path: "publish-ad",
            element: <PublisherPublishAd />,
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
