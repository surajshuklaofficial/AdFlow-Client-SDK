import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../features";
import Header from "../components/shared/Header";

const Advertisers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  // sidebar is not visible for width < 1024 in first render
  useLayoutEffect(() => {
    if (innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  }, []);

  return (
    <section className="min-h-screen bg-background pb-4 h-full">
      <Header setShowSidebar={setIsSidebarVisible} />

      <div className="flex h-full">
        {isSidebarVisible && <Sidebar />}
        <Outlet />
      </div>
    </section>
  );
};

export default Advertisers;
