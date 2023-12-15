import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HAMBURGERMENU, CLOSE, PROFILE } from "../../../assets";

const Header = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <header className="flex justify-between items-center py-4 px-2 sm:px-8 shadow-md fixed w-full bg-background opacity-75">
      <div className="flex gap-8 items-center ">
        <button className="" onClick={handleToggle}>
          <img
            className="w-9 h-9 bg-contain"
            src={!toggle ? HAMBURGERMENU : CLOSE}
            alt=""
          />
        </button>

        <figure>
          {/* <img src="" alt="" className="src" /> */}
          <h1 className="text-4xl text-secondary" onClick={() => navigate("/")}>
            <span className="text-accent">Ad</span>Flow
          </h1>
        </figure>

        <h4 className="border-l-2 px-2 text-2xl text-primary hidden sm:block">Dashboard</h4>
      </div>

      <div>
        <img className="w-10 h-10" src={PROFILE} alt="" />
      </div>
    </header>
  );
};

export default Header;
