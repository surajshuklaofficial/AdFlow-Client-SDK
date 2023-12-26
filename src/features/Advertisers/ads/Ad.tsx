import React, { useState } from "react";
import { Link } from "react-router-dom";

import { URL } from "../../../assets";

export interface Ad {
  directingUrl: string;
  adUrl: string;
  id?: Number;
}

const AdComponent: React.FC<Ad> = ({directingUrl, adUrl, id}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="border p-4 bg-white gap-2 flex flex-col w-72 h-[21rem] relative z-0 shadow-lg  items-center rounded-md">
      <a
        className="hover relative z-0"
        href={directingUrl}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
      >
        {isHovered && (
          <p className="absolute text-gray-500 bg-gray-300 opacity-50 rounded-lg px-2 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center gap-1 w-fit">
            <img className="w-4 h-4" src={URL} alt="redirecting-link" />{" "}
            {directingUrl}
          </p>
        )}
        <img
          className="w-64 h-64 object-cover"
          src={adUrl}
          alt="add-image-url"
        />
      </a>
      <Link
        className="bg-accent text-white py-2 px-4 font-bold text-center w-full"
        type="submit"
        to={`/advertiser/ad-details/${id}`}
      >
        Details
      </Link>
    </div>
  );
};

export default AdComponent;
