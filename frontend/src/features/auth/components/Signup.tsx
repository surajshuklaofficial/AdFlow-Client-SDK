import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

import PasswordInput from "./PasswordInput";
import { UserAuthInfo } from "../../../app/api";
import { signupAsync } from "../slice";
import { Dispatch } from "../../../app/store";

interface UserAuthInfoExtended extends UserAuthInfo {
  confirmPassword?: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthInfoExtended>();

  const dispatch = useDispatch<Dispatch>();

  const onSubmit: SubmitHandler<UserAuthInfoExtended> = (data) => {
    if (data.confirmPassword === data.password) {
      const { confirmPassword, ...userAuthInfo } = data;
      dispatch(signupAsync(userAuthInfo));
    } else {
      console.error("Password and Confirm Password do not match");
    }
  };

  return (
    <div className="flex-center h-screen w-screen">
      <section className="flex flex-col lg:flex-row sm:w-10/12 lg:w-4/5 h-screen sm:h-4/5 bg-secondary rounded-lg">
        <div className="bg-secondary text-white w-full lg:w-2/5 py-9 px-4 lg:px-16 rounded-[0.4rem] h-1/5 sm:h-auto">
          <p className="lg:text-[5rem] text-3xl text-center lg:text-left font-bold lg:leading-[1.1]">
            Monetize your work now!
          </p>
        </div>

        <div className="bg-white lg:w-3/5 py-12 px-8 lg:px-24 flex flex-col gap-6 lg:rounded-[0.4rem] lg:rounded-l-2xl h-4/5 sm:h-auto">
          <h2 className="text-4xl text-secondary mb-16 text-center lg:text-center">
            Create Account
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <input
                className="p-2 w-1/2"
                placeholder="First Name"
                type="text"
                {...register("firstName", { required: true })}
              />
              <input
                className="p-2 w-1/2"
                placeholder="Last Name"
                type="text"
                {...register("lastName")}
              />
            </div>
            <input
              className="p-2"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />

            <PasswordInput
              placeholder="Enter Password"
              register={register}
              name="password"
            />
            <PasswordInput
              placeholder="Confirm Password"
              register={register}
              name="confirmPassword"
            />

            <div className="flex gap-2 justify-between items-center text-secondary">
              <label className="text-secondary font-bold">Who are you:</label>
              <div className="flex gap-4 justify-between item-center font-[450]">
                <label>
                  <input
                    type="radio"
                    {...register("role", { required: true })}
                    value="advertiser"
                  />
                  Advertiser
                </label>
                <label>
                  <input
                    type="radio"
                    {...register("role", { required: true })}
                    value="publisher"
                  />
                  Publisher
                </label>
              </div>
            </div>

            <button
              className="bg-accent text-white py-2 px-4 font-bold"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="flex flex-col gap-2">
            <p className="text-center text-secondary font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-accent text-bold"
                replace={true}
              >
                Login
              </Link>
            </p>
            {/* <p className="text-center text-secondary font-bold">-- Or --</p>

            <div className="flex-center gap-8">
              <button className="rounded-full bg-accent text-white p-1 w-10 h-10 font-bold text-2xl flex-center">
                G
              </button>
              <button className="rounded-full bg-accent text-white p-1 w-10 h-10 font-bold text-2xl flex-center">
                G
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
