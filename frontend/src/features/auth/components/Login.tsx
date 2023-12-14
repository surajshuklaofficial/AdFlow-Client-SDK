import { Link } from "react-router-dom";

import PasswordInput from "./PasswordInput";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex-center h-screen w-screen">
      <section className="flex flex-col lg:flex-row w-full sm:w-10/12 lg:w-4/5 h-screen sm:h-4/5 bg-secondary rounded-lg">
        <div className="bg-secondary text-white w-full lg:w-2/5 py-9 px-4 lg:px-16 rounded-[0.4rem] h-1/5 sm:h-auto">
          <p className="lg:text-[5rem] text-3xl text-center lg:text-left font-bold lg:leading-[1.1]">Welcome to AdFlow!</p>
        </div>

        <div className="bg-white lg:w-3/5 py-12 px-8 lg:px-24 flex flex-col gap-6 lg:rounded-[0.4rem] lg:rounded-l-2xl h-4/5 sm:h-auto">
          <h2 className="text-4xl text-secondary mb-16 text-center lg:text-center">Login</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input className="p-2" placeholder="Email" type="email" />

            <PasswordInput placeholder="Enter Password" />

            <button
              className="bg-accent text-white py-2 px-4 font-bold"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="flex flex-col gap-2">
            <p className="text-center text-secondary font-semibold">
              Don't have an account?{" "}
              <Link to="/signup" className="text-accent text-bold" replace={true}>
                Signup
              </Link>
            </p>
            <p className="text-center text-secondary font-bold">-- Or --</p>

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
