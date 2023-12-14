import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import App from './App';
import { LandingPage } from './pages';
import { Login, Signup } from './features';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage  />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
];

const router = createBrowserRouter(routerConfig);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
