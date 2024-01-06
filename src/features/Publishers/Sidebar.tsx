import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="min-h-[90vh] sm:min-w-[15.72rem] border-r-2 pt-8 px-6 block">
      <ul className="flex flex-col h-4/5 text-primary font-semibold gap-4 mt-16 w-full">
        <Element url="dashboard" name="Dashboard" />
        <Element url="your-site" name="Your Sites" />
        <Element url="ad-units" name="Ad" />
        <Element url="account" name="Accounts" />
        <Element url="payments" name="Payments" />
        <Element url="chat" name="Chat with Us" />
        <Element url="feedback" name="Feedback" />
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
          isActive ? "border  bg-white shadow-sm text-secondary" : "",
          isTransitioning ? "transitioning" : "",
          "hover:border hover:bg-white hover:shadow-sm p-2 text-2xl w-full block rounded-md",
        ].join(" ")
      }
    >
      {name}
    </NavLink>
  </li>
);

export default Sidebar;
