import React from "react";

const History = () => {
    return (
        <section className="text-white py-16">
            <h2 className="text-6xl text-center mb-10">HISTORY</h2>
            <div className="grid grid-row sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className=" flex gap-10 justify-center py-4">
                        <div>
                            <img src="./images/Cartoon.png" alt="History Art" className=" rounded-lg" />
                        </div>
                        <div className="">
                            <p className="text-[#808080] font-bold ">Your Art</p>
                            <p className="text-sm text-[#B3B3B3] font-thin pb-3">Description:</p>
                            <p className="text-[#B4B4B4] text-sm">Quantity: + 1 -<span className="px-6">$1</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default History;
