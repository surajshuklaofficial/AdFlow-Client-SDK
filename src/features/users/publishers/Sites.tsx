import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../app/store";
import { Website } from "../../../app/types";
import Dialog from "./components/Dialog";
import { useEffect } from "react";
import { getWebsiteAsync, selectWebsites } from "./slice";

// TODO: fixed Row
const Sites = () => {
  const dispatch = useDispatch<Dispatch>();
  const websites = useSelector(selectWebsites);

  const jwt_token: string | null = localStorage.getItem("jwt_token");

  useEffect(() => {
    dispatch(getWebsiteAsync(jwt_token));
  }, [])

  const header = {websiteName: "Website", date: "Date"};

  console.log(websites);
  return (
    <section className="mt-28 m-8 flex flex-col gap-32 w-full">
      <div>
        <h2 className="text-xl font-semibold mb-1">Manage your sites</h2>
        <p className="text-gray-500">
          Add sites that you want to monetise with AdSense.
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <div className="w-fit" draggable>
          <Dialog />
        </div>
        <div className="flex flex-col w-full max-w-[1024px]">
          <Row {...header}/> 
          {websites.map((website) => (
            <Row {...website} key={website.id}/> 

          ))}
        </div>
      </div>
    </section>
  );
};

// E => Edit, 
const Row = ({websiteName, date}: Website) => (
  <div
    className={`grid grid-cols-6 gap-4 border-y items-center py-2 px-4 first:font-bold text-center`}
  >
    <span className=" whitespace-nowrap col-span-2">
      <a className="" href="">
        {websiteName}
      </a>
    </span>
    <span className="flex-1 whitespace-nowrap">{date ? date : '16 Dec 2023'}</span>
    <span className="flex-1">R</span>
    <span className="flex-1">G</span>
    <span className="flex-1">E</span> 
  </div>
);

export default Sites;
