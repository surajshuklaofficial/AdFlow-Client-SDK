import React, { useState } from "react";

import { URL } from "../../../assets";
import { Ad } from "../../../app/api";

const AdComponent: React.FC<Ad> = ({directingUrl, adUrl}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border p-4 bg-white gap-2 flex flex-col w-72 h-[21rem] relative z-0">
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
      <button
        className="bg-accent text-white py-2 px-4 font-bold"
        type="submit"
      >
        Details
      </button>
    </div>
  );
};

export default AdComponent;
