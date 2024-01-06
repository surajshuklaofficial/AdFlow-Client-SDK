import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { PublisherSidebar } from "../features";
import Header from "../components/shared/Header";

const Publishers = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  // sidebar is not visible for width < 1024 in first render
  useLayoutEffect(() => {
    if (innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  }, []);

  return (
    <section className="h-full min-h-screen">
      <Header setShowSidebar={setIsSidebarVisible} />

      <div className="flex h-full">
        {isSidebarVisible && <PublisherSidebar />}
        <Outlet />
      </div>
    </section>
  );
};

export default Publishers;
