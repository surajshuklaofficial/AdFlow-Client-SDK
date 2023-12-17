import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "../features";

const Publishers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  useLayoutEffect(() => {
    if(innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  },[])

  return (
    <section className="h-screen">
      <Header setShowSidebar={setIsSidebarVisible}/>

      <div className="flex">
        {isSidebarVisible && <Sidebar />}
        <Outlet />
      </div>
    </section>
  );
};

export default Publishers;
