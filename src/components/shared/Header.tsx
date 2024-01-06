import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HAMBURGERMENU, PROFILE } from "../../assets";
import { signout } from "../../features/auth/slice";

import {
  selectAdvertiserInfo,
  fetchAdvertiserInfoAsync,
} from "../../features/Advertisers/slice";
import { Dispatch } from "../../app/store";
import { AdvertiserInfo } from "../../app/api";

type HeaderProps = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ setShowSidebar }) => {
  const [accountVisible, setAccountVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();
  const currentUrl = location.href;
  const advertiserInfo = useSelector(selectAdvertiserInfo);

  const handleToggle = () => {
    setShowSidebar((prevValue) => !prevValue);
  };

  const handleAccountBox = () => {
    setAccountVisible((prevState) => !prevState);
  };

  const handleSignout = () => {
    dispatch(signout());
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const jwt_token: string | null = localStorage.getItem("jwt_token");
    dispatch(fetchAdvertiserInfoAsync(jwt_token));
  }, [dispatch]);

  return (
    <header className="flex justify-between items-center py-4 px-2 sm:px-8 shadow-md fixed w-full bg-background z-50">
      {/* Left Section */}
      <div className="flex gap-8 items-center">
        <button className="" onClick={handleToggle}>
          <img
            className="w-9 h-9 bg-contain"
            src={HAMBURGERMENU}
            alt="Hamburger Menu"
          />
        </button>

        <figure>
          <h1
            className="text-4xl text-primary cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-accent">Ad</span>Flow
          </h1>
        </figure>

        <h4 className="border-l-2 px-2 text-2xl text-secondary hidden sm:block capitalize font-semibold">
          {currentUrl.split("/")[4]?.split("-").join(" ") || "Dashboard"}
        </h4>
      </div>

      {/* Right Section */}
      <div className="">
        <button onClick={handleAccountBox}>
          <img className="w-10 h-10" src={PROFILE} alt="Profile" />
        </button>

        {accountVisible && (
          <AccountBox
            advertiserInfo={advertiserInfo}
            handleSignout={handleSignout}
            handleAccountBox={handleAccountBox}
          />
        )}
      </div>
    </header>
  );
};

type Handler = () => void;
interface Props {
  handleSignout: Handler,
  handleAccountBox: Handler,
  advertiserInfo: AdvertiserInfo
}

const AccountBox = ({ advertiserInfo, handleSignout, handleAccountBox }: Props) => (
  <>
    <div className="absolute right-12 sm:right-16 flex flex-col px-4 py-2 items-center z-50 bg-white shadow-lg rounded-md border">
      <div className="flex items-center gap-4 border-b pb-4">
        <img
          className="w-16 h-16 object-cover rounded-full"
          src={PROFILE}
          alt="profile"
        />
        <div className="text-primary">
          <h4 className="text-xl font-bold capitalize">
            {advertiserInfo.firstName} {advertiserInfo.lastName}
          </h4>
          <h5 className="text-sm text-gray-500 lowercase">
            {advertiserInfo.email}
          </h5>
          <Link to="account" className="text-secondary hover:text-accent">
            My Account
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="bg-accent text-white py-1 px-4 font-bold rounded-md"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
    </div>
    <div
      className="fixed inset-0 z-40"
      onClick={handleAccountBox}
    />
  </>
);

export default Header;
