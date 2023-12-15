import React, { useState } from "react";

import { URL } from "../../../assets";

const Ad = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="border p-4 bg-white gap-2 flex flex-col w-72 h-[21rem]">
      <a
        className="hover relative"
        href="https://surajshukla.vercel.app"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
      >
        {isHovered && (
          <p className="absolute text-gray-500 bg-gray-300 opacity-50 rounded-lg px-2 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center gap-1 w-fit">
            <img className="w-4 h-4" src={URL} alt="redirecting-link" />{" "}
            https://surajshukla.vercel.app/
          </p>
        )}
        <img
          className="w-64 h-64 object-cover"
          src="https://i.pinimg.com/originals/f5/e5/b7/f5e5b73bfbd46a2052d0ceb3ac2bfa71.jpg"
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

export default Ad;
