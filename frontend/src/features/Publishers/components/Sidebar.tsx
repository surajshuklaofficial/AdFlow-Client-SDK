import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="h-[90vh] w-[15.72rem] border-r-2 py-8 px-6 lg:block ">
      <ul className="flex flex-col h-4/5 text-primary font-semibold gap-4 mt-16">
        <Element url="dashboard" name="Dashboard" />
        <Element url="publish-ad" name="Ads" />
        <Element url="dashboard" name="Accounts" />
        <Element url="dashboard" name="Payments" />
        <Element url="dashboard" name="Chat with Us" />
        <Element url="dashboard" name="Feedback" />
      </ul>
    </aside>
  );
};

type ElementProp = {
  url: string;
  name: string;
};

const Element: React.FC<ElementProp> = ({ url, name }) => (
  <li>
    <NavLink
      to={url}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "text-secondary" : "",
          isTransitioning ? "transitioning" : "",
          "hover:bg-primary hover:text-white p-2 text-2xl w-full block",
        ].join(" ")
      }
    >
      {name}
    </NavLink>
  </li>
);

export default Sidebar;
