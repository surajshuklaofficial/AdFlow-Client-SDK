import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { HAMBURGERMENU, CLOSE } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState<Boolean>(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle((prevValue) => !prevValue);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md">
      <figure>
        {/* <img src="" alt="" className="src" /> */}
        <h1 className="text-4xl text-secondary" onClick={() => navigate("/")}>
          <span className="text-accent">Ad</span>Flow
        </h1>
      </figure>

      <nav>
        <ul className="hidden lg:flex gap-8 justify-between items-center font-medium text-secondary">
          <li className="text-secondary">Home</li>
          <li>Advertiser</li>
          <li>Maker</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>
            <Link to="/login" className="text-accent py-2 px-4 font-bold">
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-accent text-white py-2 px-4 font-bold"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>

      <button className="lg:hidden" onClick={handleToggle}>
        <img
          className="w-9 h-9 bg-contain"
          src={!toggle ? HAMBURGERMENU : CLOSE}
          alt=""
        />
      </button>
      {toggle && (
        <nav className="absolute top-16 right-20 border bg-background px-12 py-10">
          <ul className="flex flex-col gap-8 justify-between items-center font-medium text-secondary lg:hidden">
            <li className="text-secondary">Home</li>
            <li>Advertiser</li>
            <li>Maker</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li className="flex flex-col gap-3">
              <Link to="/login" className="text-accent py-2 px-4 font-bold">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-accent text-white py-2 px-4 font-bold"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
