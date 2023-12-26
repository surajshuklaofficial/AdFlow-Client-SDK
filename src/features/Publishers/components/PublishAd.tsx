import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdComponent from "./Ad";
import { ADD } from "../../../assets";
import EnterAd from "./EnterAd";
import { fetchAdsByAdvertiserAsync, selectAds } from "../slice";
import { Ad } from "../../../app/api";

// interface AdData {
//   adUrl: string;
//   directingUrl: string;
//   // Add other properties if there are more
// }

const PublishAd: React.FC = () => {
  const [enterAd, setEnterAd] = useState<boolean>(false);
  const ads: Ad[] = useSelector(selectAds);
  const dispatch = useDispatch();

  const handleEnterAd = () => {
    setEnterAd((prevState) => !prevState);
  };

  useEffect(() => { 
    const jwt_token: string | null = JSON.parse(
      localStorage.getItem("jwt_token")
    );

    if (!jwt_token) {
      console.error("JWT token not found");
      return;
    }

    dispatch(fetchAdsByAdvertiserAsync(jwt_token));
  }, [dispatch]);

  return (
    <div className="mt-24 lg:mt-28">
      hi
    </div>
  );
};

export default PublishAd;
