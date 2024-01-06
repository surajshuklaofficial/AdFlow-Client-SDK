import { Link } from "react-router-dom";

const AdUnit = () => {
  return (
    <section className="mt-20 p-4 w-full">
      <div>
        <h3 className="text-xl font-medium">Create new ad Unit</h3>
        <div className="flex gap-8 m-1 mt-8 lg:m-8">
          <AdBlockType />
          <AdBlockType />
          <AdBlockType />
        </div>
      </div>
      <div className="w-full mt-20">
        <h4 className="font-medium text-xl">Existing Ad Units</h4>
        <div className="mt-8 mx-1 lg:mx-8 max-w-[1024px] lg:w-full">
          <InfoRow />
          <InfoRow />
          <InfoRow />
        </div>
      </div>
    </section>
  );
};

const AdBlockType = () => (
  <Link to="/publisher/create-ad-unit/in-feed">
    <article className="border rounded-lg flex flex-col gap-4 p-4 shadow-sm hover:shadow-lg w-52">
      <div>
        <p className="text-xs border rounded-sm w-fit px-2 bg-gray-200 text-gray-500 relative -left-2 -top-2">
          Beta
        </p>
      </div>
      <div>
        <img
          src="https://ssl.gstatic.com/adsense/apps/static/adsense3_antipasti_server_20231210-12_RC00/common/ads.adsense.fe.myads.ad_units.components.formats_overview/images/display.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-medium">In-feed ads</h4>
        <p className="text-gray-500 text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </article>
  </Link>
);

const InfoRow = () => (
  <div className="grid grid-cols-7 gap-10 border-y items-center py-2 px-2 lg:px-4 first:font-bold text-center">
    <div className="flex flex-col flex-1 text-left">
      <span>Name</span>
      <span className="text-sm text-gray-500">3456655435</span>
    </div>

    <span className="flex-1 whitespace-nowrap">In-feed</span>

    <span className="flex-1 whitespace-nowrap">16 Dec 2023</span>
    <span className="flex-1">R</span>
    <span className="flex-1">G</span>
    <span className="flex-1">E</span>
    <span className="flex-1">M</span>
  </div>
);

export default AdUnit;
