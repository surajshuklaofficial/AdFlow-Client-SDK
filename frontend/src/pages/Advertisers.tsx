import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar } from "../features";

const Advertisers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  useLayoutEffect(() => {
    if(innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  },[])

  return (
    <section className="min-h-screen bg-background pb-4 h-full">
      <Header setShowSidebar={setIsSidebarVisible}/>

      <div className="flex h-full">
        {isSidebarVisible && <Sidebar />}
        <Outlet />
      </div>
    </section>
  );
};

export default Advertisers;
