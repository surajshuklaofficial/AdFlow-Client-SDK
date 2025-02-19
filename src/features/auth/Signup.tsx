import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import PasswordInput from "./PasswordInput";
import { Role, UserAuthInfo } from "../../app/api";
import { selectRole, signupAsync } from "./slice";
import { Dispatch } from "../../app/store";
import { HERO2 } from "../../assets";

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
  const navigate = useNavigate();

  const role: Role | undefined = useSelector(selectRole);

  console.log(errors);

  const onSubmit: SubmitHandler<UserAuthInfoExtended> = (data) => {
    if (data.confirmPassword === data.password) {
      const { confirmPassword, ...userAuthInfo } = data;
      dispatch(signupAsync(userAuthInfo));
    } else {
      console.error("Password and Confirm Password do not match");
    }
  };

  useEffect(() => {
    console.log(role);
    if (role == "advertiser") {
      navigate("/advertiser", { replace: true });
    } else if (role == "publisher") {
      navigate("/publisher", { replace: true });
    }
  }, [role, dispatch]);

  return (
    <div
      className="flex-center h-screen w-screen"
      style={{
        backgroundImage: `url(${HERO2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white w-full sm:w-4/5 lg:w-3/5 py-12 px-8 lg:px-24 flex flex-col gap-6 sm:rounded-xl shadow-2xl">
        <h2 className="text-4xl text-primary mb-16 text-center lg:text-center">
          Create Account
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="p-2 w-1/2"
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <p className="bg-red-500">hello</p>}
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

          <div className="flex gap-2 justify-between items-center text-primary">
            <label className="text-primary font-bold">Who are you:</label>
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
          <p className="text-center text-primary font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-accent text-bold" replace={true}>
              Login
            </Link>
          </p>
          <p className="text-center text-primary font-bold">-- Or --</p>

          <div className="flex-center gap-8">
            <button className="rounded-full bg-accent text-white p-1 w-10 h-10 font-bold text-2xl flex-center">
              G
            </button>
            <button className="rounded-full bg-accent text-white p-1 w-10 h-10 font-bold text-2xl flex-center">
              G
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
