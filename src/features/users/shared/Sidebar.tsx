import { NavLink } from "react-router-dom";

type ElementProp = {
  url: string;
  name: string;
};

const Sidebar = ({ options }: { options: ElementProp[] }) => {
  return (
    <aside className="min-h-[90vh] sm:min-w-[15.72rem] border-r-2 pt-8 px-6 block">
      <ul className="flex flex-col h-4/5 text-primary font-semibold gap-4 mt-16 w-full">
        {
          options.map((option) => (
            <Element {...option} />
          ))
        }
      </ul>
    </aside>
  );
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
