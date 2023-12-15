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
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-auto gap-2 mt-20 lg:mt-24">
      {ads.map((ad, index) => (
        <div key={index}>
        <AdComponent adUrl={ad.adUrl} directingUrl={ad.directingUrl} />
        </div>
      ))}
      <div className="flex-center w-72 h-[21rem] bg-white" onClick={handleEnterAd}>
        <img src={ADD} alt="Add Advertisement" />
      </div>
      {enterAd && <EnterAd handleEnterAd={handleEnterAd} />}
      {enterAd && (
        <div
          className="fixed inset-0 bg-black opacity-75 z-0"
          onClick={handleEnterAd}
        />
      )}
    </div>
  );
};

export default PublishAd;
