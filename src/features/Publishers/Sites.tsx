import Dialog from "./Dialog";

const Sites = () => {
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
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
};

const Row = () => (
  <div
    className={`grid grid-cols-6 gap-4 border-y items-center py-2 px-4 first:font-bold text-center`}
  >
    <span className=" whitespace-nowrap col-span-2">
      <a className="" href="">
        surajshukla.vercel.app
      </a>
    </span>
    <span className="flex-1 whitespace-nowrap">16 Dec 2023</span>
    <span className="flex-1">R</span>
    <span className="flex-1">G</span>
    <span className="flex-1">E</span>
  </div>
);

export default Sites;
