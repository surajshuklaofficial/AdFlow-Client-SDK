import { useState } from "react";

import { HIDE, VIEW } from "../../assets";

type InputProps = {
  placeholder: string;
  register: any;
  name: string
};

const PasswordInput: React.FC<InputProps> = ({ placeholder, register, name }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <input
        className="p-2 w-11/12"
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        {...register(name, { required: true })}
      />
      <button
        className="w-1/12 flex-center"
        onClick={handleShowPassword}
        type="button"
      >
        <img className="w-4" src={showPassword ? HIDE : VIEW} alt="" />
      </button>
    </div>
  );
};

export default PasswordInput;
