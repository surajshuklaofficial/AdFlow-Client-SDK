import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../features/users/shared/Header";
import { sidebarOptionsAdvertiser } from "../app/constant";
import Sidebar from "../features/users/shared/Sidebar";

const AdvertiserPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);

  // sidebar is not visible for width < 1024 in first render
  useLayoutEffect(() => {
    if (innerWidth > 1024) {
      setIsSidebarVisible(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background pb-4 h-full">
      <Header setShowSidebar={setIsSidebarVisible} />

      <div className="flex h-full">
        {isSidebarVisible && <Sidebar options={sidebarOptionsAdvertiser}/>}
        <Outlet />
      </div>
    </div>
  );
};

export default AdvertiserPage;
