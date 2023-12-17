import React from "react";
import { Link } from "react-router-dom";

import {HERO} from "../../../assets";

const Home = () => {
  return (
    <main className="py-4 px-8 flex-center h-[90vh] relative" >
      <div className="flex-center flex-col gap-6 text-center mb-12 lg:mb-0 relative z-40">
        <h3 className="text-6xl text-primary font-medium" style={{textShadow: "1px 1px 2px pink"}}>Transform Clicks into <br /> Prosperity</h3>
        <p className="text-xl text-white mt-4"> Elevate Your Earnings with <span className="text-accent font-medium">Ad</span><span className="text-primary" style={{textShadow: "1px 1px 2px pink"}}>Flow!</span></p>
        <Link to="/signup" className="bg-accent text-white py-2 px-4 font-bold text-xl">Get Started</Link>
      </div>
      <div className="absolute inset-1 opacity-90 blur-sm mt-1" style={{backgroundImage: `url(${HERO})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}/>
    </main>
  );
};

export default Home;
