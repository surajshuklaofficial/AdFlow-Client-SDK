import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../features/users/shared/Header";
import { sidebarOptionsPublisher } from "../app/constant";
import Sidebar from "../features/users/shared/Sidebar";

const PublisherPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  // sidebar is not visible for width < 1024 in first render
  useLayoutEffect(() => {
    if (innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  }, []);

  return (
    <div className="h-full min-h-screen">
      <Header setShowSidebar={setIsSidebarVisible} />

      <div className="flex h-full">
        {isSidebarVisible && <Sidebar options={sidebarOptionsPublisher}/>}
        <Outlet />
      </div>
    </div>
  );
};

export default PublisherPage;
