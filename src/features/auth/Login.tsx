import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import PasswordInput from "./PasswordInput";
import { Role, UserAuthInfo } from "../../app/api";
import { selectRole, signinAsync } from "./slice";
import { Dispatch } from "../../app/store";
import { HERO2 } from "../../assets";

const Login = () => {
  const { register, handleSubmit } = useForm<UserAuthInfo>();
  const dispatch = useDispatch<Dispatch>();
  const navigate = useNavigate();

  const role: Role | undefined = useSelector(selectRole);

  const onSubmit: SubmitHandler<UserAuthInfo> = (data) => {
    dispatch(signinAsync(data));
  };

  useEffect(() => {
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
      <section className="flex flex-col justify-center items-center lg:flex-row w-full sm:w-10/12 lg:w-4/5 h-screen sm:h-4/5 bg-transparent rounded-lg">
        

        <div className="bg-white w-full sm:w-4/5 lg:w-3/5 py-12 px-8 lg:px-24 flex flex-col gap-6 shadow-2xl sm:rounded-xl">
          <h2 className="text-4xl text-primary mb-16 text-center lg:text-center">
            Login
          </h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <button
              className="bg-accent text-white py-2 px-4 font-bold"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="flex flex-col gap-2">
            <p className="text-center text-primary font-semibold">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-accent text-bold"
                replace={true}
              >
                Signup
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
      </section>
    </div>
  );
};

export default Login;
