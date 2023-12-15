import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../features";

const Advertisers = () => {
  return (
    <section className="h-screen">
      <Header />

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </section>
  );
};

export default Advertisers;
