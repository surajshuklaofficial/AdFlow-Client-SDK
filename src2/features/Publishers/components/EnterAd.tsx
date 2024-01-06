import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Dispatch } from "../../../app/store";
import { Ad } from "../../../app/api";
import { uploadAdAsync } from "../slice";

type EnterAdProps = {
  handleEnterAd: () => void;
};

const EnterAd: React.FC<EnterAdProps> = ({ handleEnterAd }) => {
  const {
    register,
    handleSubmit,
  } = useForm<Ad>();

  const dispatch = useDispatch<Dispatch>();

  const onSubmit: SubmitHandler<Ad> = (data) => {
    const jwt_token: string | null = localStorage.getItem("jwt_token");

    dispatch(uploadAdAsync({ ...data, advertiser: jwt_token }));
    handleEnterAd();
  };

  return (
    <div className="absolute z-10 bg-background flex flex-col top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 py-4 px-12 w-[32rem] h-96 justify-around items-center">
      <h2 className="text-4xl text-primary mb-16 text-center lg:text-center">
        Add New Ad
      </h2>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-2 w-full"
          placeholder="Enter Url of Ad"
          type="url"
          {...register("adUrl", { required: true })}
        />

        <input
          className="p-2"
          placeholder="Enter Redirecting URL"
          type="url"
          {...register("directingUrl", { required: true })}
        />

        <button
          className="bg-accent text-white py-2 px-4 font-bold"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EnterAd;
