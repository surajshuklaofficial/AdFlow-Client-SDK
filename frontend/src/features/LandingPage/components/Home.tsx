import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="py-4 px-8 flex-center h-[90vh]">
      <div className="flex-center flex-col gap-6 text-center">
        <h3 className="text-6xl text-secondary font-medium">Transform Clicks into <br /> Prosperity</h3>
        <p className="text-xl text-gray-500/75 mt-4"> Elevate Your Earnings with <span className="text-accent font-medium">Ad</span><span className="text-secondary">Flow!</span></p>
        <button className="bg-accent text-white py-2 px-4 font-bold text-xl">Get Started</button>
      </div>
    </main>
  );
};

export default Home;
