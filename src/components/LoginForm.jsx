import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Optional: Add validation or authentication logic here

    // Navigate to home after login
    navigate("/home");
  };

  return (
    <div className="bg-black min-h-screen text-white text-noto">
      <div className="px-10">

        <div className="absolute top-10 bg-[#330A42] text-white font-italic px-4 py-2 rounded-3xl text-sm font-bold">
          <p>ONLINE GRAFFITI</p>
        </div>

        <div className="left-72 absolute top-16 md:left-96 w-32 h-32 bg-gradient-to-br from-[#530061] to-[#0D0A30] rounded-full "></div>

        <div className="text-4xl md:text-5xl text-white font-semibold pt-52">
          “Welcome Back !!”
          <div className="flex">
            <div className="text-sm font-medium italic mt-2 border px-2 py-2 w-fit cursor-pointer font-italic ">
              <p>Skip the lag ?</p>
            </div>
            <div className="text-[#4D4D4D] text-lg pt-3">
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:flex items-center md:justify-end px-7 relative py-16">
        {/* Background circle */}
        <div className="absolute top-3 right-56 w-24 h-24 bg-gradient-to-br from-[#530061] to-[#0D0A30] rounded-full"></div>

        {/* Form box */}
        <div className="z-10 bg-transparent backdrop-blur-md px-6 pt-10 pb-6 rounded-2xl shadow-lg w-96 border border-[#BFBFBF4F]">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="pb-3 font-light">Glad you’re back.!</p>
          <form onSubmit={handleLogin} className="space-y-4 text-white">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 bg-black border border-white rounded-xl text-white placeholder-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 bg-black border border-white rounded-xl text-white placeholder-white"
              required
            />

            <div className="flex justify-between items-center text-sm">
              <label>
                <input type="checkbox" className="mr-1" />
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#628EFF] via-[#8740CD] to-[#580475] rounded-xl text-white hover:opacity-90"
            >
              Login
            </button>
          </form>

          <Link
            to="/forgot-password"
            className="flex justify-center font-extralight text-sm hover:underline mt-4"
          >
            Forgot password?
          </Link>

          <div className="text-[#4D4D4D] text-center pt-7">
            ______________ or ______________
          </div>

          <div className="flex justify-center space-x-4 mt-2 pb-6">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-6 h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6" />
          </div>

          <p className="text-center text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="hover:underline">Sign up</Link>
          </p>

          <div className="flex justify-center space-x-4 text-xs text-center mt-2">
            <p>Terms & Conditions</p>
            <p>Support</p>
            <p>Customer Care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
