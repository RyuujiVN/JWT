import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/userService";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login = () => {
  const [leak, setLeak] = useState(false);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  // const navigate = useNavigate();

  const loginForm = async (data) => {
    try {
      const response = await login(data);

      toast.success(response.data?.message);
      // navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || error?.message);
    }
  };

  return (
    <>
      <div className="login w-screen h-screen flex justify-center items-center bg-login">
        <form
          className="form-login w-[450px] border-2 boder-[rgba(255, 255, 255, .2)] py-5 px-10 flex flex-col items-center gap-3 rounded-2xl backdrop-blur-[20px]"
          onSubmit={handleSubmit(loginForm)}
        >
          <h1 className="form-title font-bold text-4xl text-white mb-5">
            Login
          </h1>
          <div className="form-input w-full relative">
            <input
              type="text"
              className="input text-white p-3 rounded-2xl bg-transparent border-2 border-white placeholder:text-white w-full outline-none"
              placeholder="Email..."
              {...register("email", {
                required: "This field is required.",
              })}
            />
            <FaUser className="absolute top-3 right-3 text-white text-2xl" />
            <p className="text-red-700 mt-3">{errors.email?.message}</p>
          </div>

          <div className="form-input w-full relative">
            <input
              type={leak ? "text" : "password"}
              className="input text-white p-3 rounded-2xl bg-transparent border-2 border-white placeholder:text-white w-full outline-none"
              placeholder="Password..."
              {...register("password", {
                required: "This field is required.",
              })}
            />

            {leak ? (
              <IoEyeSharp
                className="absolute top-3 right-3 text-white text-2xl cursor-pointer"
                onClick={() => setLeak(false)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-3 right-3 text-white text-2xl cursor-pointer"
                onClick={() => setLeak(true)}
              />
            )}
            <p className="text-red-700 mt-3">{errors.password?.message}</p>
          </div>

          <div className="flex justify-between w-full text-lg">
            <div className="remember-me flex items-center gap-2">
              <input type="checkbox" name="remember" id="remeber" />
              <label htmlFor="remeber" className="text-white">
                Remember me
              </label>
            </div>

            <Link className="text-white">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="bg-white text-center w-full text-xl py-2 rounded-[45px] font-semibold cursor-pointer outline-none"
          >
            Login
          </button>

          <div className="text-white w-full text-center mb-5">
            Do not have an account? <Link className="font-bold">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
