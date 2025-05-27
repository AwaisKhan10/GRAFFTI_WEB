import React from "react";

const StepSection = () => {
    return (

        < div className="text-center py-10 " >
            <h2 className="text-2xl font-bold mb-6">Create Your Art In Easy Step</h2>

            <div className=" rounded-3xl w-64 mx-auto border-4 border-yellow-300 p-1">
                <div className="bg-gradient-to-b from-yellow-300 to-yellow-600 p-6 rounded-3xl">
                    <div className="bg-yellow-800 rounded-4xl text-white px-6 py-2 inline-block text-sm font-semibold mb-3 rounded-xl">
                        Choose Your Square
                    </div>
                    <p className="text-sm text-white mb-4">
                        Select the square you want to purchase from the grid
                    </p>
                    <button className="mt-6 bg-yellow-400 text-white px-4 py-2 rounded-md font-semibold hover:text-black hover:bg-yellow-500 duration-100">
                        Start Drawing
                    </button>
                </div>
            </div>


        </div >

    );
};

export default StepSection;
