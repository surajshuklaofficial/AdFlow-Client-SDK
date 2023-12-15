import Ad from "./Ad";
import { ADD } from "../../../assets";

const PublishAd = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-auto gap-2 mt-4 sm:mt-16 lg:mt-24">
      {[1, 2, 3, 4, 1].map(() => (
        <Ad />
      ))}
      <div className="flex-center w-72 h-[21rem]"><img src={ADD} alt="" /></div>
    </div>
  );
};

export default PublishAd;
