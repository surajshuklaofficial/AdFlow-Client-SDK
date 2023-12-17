import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Dispatch } from "../../../../app/store";
import { Ad } from "../../../../app/api";
import { fetchAdAsync, selectAd, uploadAdAsync, removeAd, updateAdAsync } from "../../slice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type AdInputProps = {
  handleAdInput: () => void;
};

const AdInput: React.FC<AdInputProps> = ({ handleAdInput }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Ad>();
  const params = useParams();
  const dispatch = useDispatch<Dispatch>();
  const ad = useSelector(selectAd);

  const onSubmit: SubmitHandler<Ad> = (data) => {
    const jwt_token: string | null = localStorage.getItem("jwt_token");
    if (ad) {
      console.log("hi")
      dispatch(updateAdAsync({...ad, ...data}));
    } else {
      dispatch(uploadAdAsync({ ...data, advertiser: jwt_token }));
    }
    handleAdInput();
  };
  
  useEffect(() => {
    const id = params.id;
    if (id) {
      dispatch(fetchAdAsync(id));
    } else {
      dispatch(removeAd());
    }
  }, []);

  useEffect(() => {
    if (ad) {
      setValue("adUrl", ad.adUrl);
      setValue("description", ad.description);
      setValue("directingUrl", ad.directingUrl);
      setValue("organisationName", ad.organisationName);
      setValue("title", ad.title);
    } else {
      reset();
    }
  }, [ad]);

  return (
    <div className="absolute z-40 bg-background flex flex-col top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-12 w-[32rem] justify-around items-center rounded-lg shadow-md">
      <h2 className="text-4xl text-primary mb-8 text-center lg:text-center font-bold">
        {ad ? "Update" : "Add New"} Ad
      </h2>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-3 w-full border rounded-md"
          placeholder="Enter Url of Ad"
          type="url"
          {...register("adUrl", { required: true })}
        />

        <input
          className="p-3 border rounded-md"
          placeholder="Enter Redirecting URL"
          type="url"
          {...register("directingUrl", { required: true })}
        />

        <input
          className="p-3 border rounded-md"
          placeholder="Enter Ad Title"
          type="text"
          {...register("title", { required: true })}
        />

        <textarea
          className="p-3 border rounded-md"
          placeholder="Enter Ad Description"
          {...register("description", { required: true })}
        />

        <input
          className="p-3 border rounded-md"
          placeholder="Enter Organisation Name to display"
          type="text"
          {...register("organisationName", { required: true })}
        />

        <button
          className="bg-accent text-white py-3 px-6 font-bold rounded-md"
          type="submit"
        >
          {ad ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AdInput;
