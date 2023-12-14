import React from "react";
import { Outlet } from "react-router-dom";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default App;
