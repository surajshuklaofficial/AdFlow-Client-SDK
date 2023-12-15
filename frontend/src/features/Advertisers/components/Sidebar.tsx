import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-[90vh] w-[15.72rem] border-r-2 py-4 px-6 lg:block hidden">
      <ul className="flex flex-col h-4/5 text-secondary font-semibold gap-4 mt-16">
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink
            to="dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink
            to="publish-ad"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-primary" : ""
            }
          >
            Ads
          </NavLink>
        </li>
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink to="dashboard">Payments</NavLink>
        </li>
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink to="dashboard">Account</NavLink>
        </li>
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink to="dashboard">Chat with Us</NavLink>
        </li>
        <li className="hover:bg-secondary hover:text-white p-2 text-2xl">
          <NavLink to="dashboard">Feedback</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
