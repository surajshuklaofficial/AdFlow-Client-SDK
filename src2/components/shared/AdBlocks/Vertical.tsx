const VerticalAd = () => {
  return (
    <article className="flex w-40 font-[roboto] flex-col">
      <div className="min-h-[8rem] flex-1">
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
          alt="ad-image"
          className="min-h-[10rem] w-full object-cover"
        />
      </div>
      <div className="p-2 flex-1 bg-slate-400 flex flex-col gap-2">
        <h4 className=" text-xl">Try some Kind Cup coffee today</h4>
        <h5 className="text-sm text-gray-600">Kind Cup Coffee Company</h5>
      </div>
      <div className="flex-1 p-2 bg-slate-200">
        <p className="text-sm text-gray-700">
          Nutty and dark Ethiopian roast to help you get going in the morning.
          Stay kind! Kink Cup.
        </p>
      </div>
    </article>
  );
};

export default VerticalAd;
