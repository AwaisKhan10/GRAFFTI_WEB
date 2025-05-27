//src/components/payment/YourChoice.jsx
import React from "react";

const YourChoice = () => {
    return (
        <section className="text-white py-16 relative overflow-hidden">
            {/* Blue circle - half shown on left below "Your Art" text */}
            <div className="absolute -right-16 top-[300px] w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>

            <h2 className="text-6xl text-center mb-10 relative z-10">YOUR CHOICE</h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-20 relative z-10">
                {/* Card 1 */}
                <div className="flex justify-center items-center gap-5 p-4">
                    <div>
                        <img src="/images/Fish1.png" alt="Your Art" className="w-30 h-30 rounded-lg" />
                    </div>
                    <div className="space-y-10">
                        <p className="font-bold text-[#808080]">Your Art</p>
                        <p className="text-sm text-[#B3B3B3]">Description:</p>
                        <p className="text-[#B4B4B4]">Quantity + 1 -</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex justify-center items-center gap-5 p-4">
                    <div>
                        <img src="/images/Fish2.png" alt="Your Art" className="w-30 h-30 rounded-lg" />
                    </div>
                    <div className="space-y-10">
                        <p className="font-bold text-[#808080]">Your Art</p>
                        <p className="text-sm text-[#B3B3B3]">Description:</p>
                        <p className="text-[#B4B4B4]">Quantity + 1 -</p>
                    </div>
                </div>
            </div>

            {/* Blue circle - bottom right */}
            <div className="absolute left-72 bottom-10 w-32 h-32 bg-gradient-to-br from-[#190061] to-[#0A1B30] rounded-full z-0"></div>
        </section>
    );
};

export default YourChoice;
