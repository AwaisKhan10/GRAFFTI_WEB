import React from "react";
import { Link } from 'react-router-dom';


const ForgotPassword = () => {
    return (
        <div className="bg-black min-h-screen text-white text-noto">
            <div className="px-10">

                <div className="absolute top-10 bg-[#780630] text-white font-italic px-4 py-2 rounded-3xl text-sm font-bold">
                    <p>
                        ONLINE GRAFFITI
                    </p>
                </div>

                <div className="left-72 absolute top-16 md:left-96 w-32 h-32 bg-gradient-to-br from-[#61003A] to-[#2D0A30] rounded-full "></div>

                <div className="text-4xl md:text-5xl text-white  font-semibold pt-52  ">
                    “No Worries!!”
                    <div className="flex">
                        <div className="text-sm font-medium italic mt-2 border  px-2 py-2 w-fit cursor-pointer font-italic ">
                            <p>Skip the lag ?</p>
                        </div>
                        <div className="text-[#4D4D4D] text-lg pt-3 ">
                            - - - - - - - - - - - - - - - - - - -
                        </div>
                    </div>
                </div>
            </div>

            < div className="flex justify-center md:flex items-center md:justify-end px-7 relative  py-16" >
                {/* Circle Backgrounds */}
                <div className="absolute top-3 right-56 w-24 h-24 bg-gradient-to-br from-[#61003A] to-[#2D0A30]  rounded-full"></div>

                {/* Form Container */}
                <div className="z-10 bg-transparent backdrop-blur-md px-6 pt-10 pb-6 rounded-2xl shadow-lg w-96 border border-[#BFBFBF4F]">
                    <h2 className="text-2xl font-semibold ">Forgot Password ?</h2>
                    <p className="pb-3 font-light">Please enter you’re email</p>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="example@mail.com"
                            className="w-full p-2 bg-black border border-white rounded-xl text-white placeholder-white"
                        />

                        {/* <div className="flex justify-between items-center text-sm text-gray-400">
                            <label>
                                <input type="checkbox" className="mr-1" />
                                Remember me
                            </label>
                        </div> */}
                        {/* <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl hover:opacity-90">
                            Login
                        </button> */}
                        <button className="w-full py-2 bg-gradient-to-r from-[#E948C5] via-[#CD407B] to-[#75042D] rounded-xl text-white hover:opacity-90  ">
                            Reset Password
                        </button>

                        {/* <a href="#" className="flex justify-center  font-extralight text-sm hover:underline">
                            Forgot password?
                        </a> */}
                        {/* <div className="text-[#4D4D4D] text-center ">
                            ______________ or ______________
                        </div>
                        <div className="flex justify-center space-x-4 mt-2 pb-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-8 h-8" />
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-8 h-8" />
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-8 h-8" />
                        </div> */}
                        {/* <p className="text-center text-sm  mt-4 pt-40">
                            Don’t have an account ?  <a href="#" className=" hover:underline">Signup</a>
                        </p> */}
                        <p className="text-center text-sm mt-4 pt-40">
                            Don’t have an account? <Link to="/signup" className="hover:underline">Signup</Link>
                        </p>

                        <div className="flex justify-center space-x-4 text-xs text-center mt-2">
                            <p>Terms & Conditions </p>
                            <p>Support </p>
                            <p>Customer Care </p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ForgotPassword;

