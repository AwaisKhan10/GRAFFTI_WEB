import React, { useState } from "react";

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center gap-2">
                    <img
                        className="px-2 cursor-pointer md:hidden"
                        src="./images/3line.png"
                        alt=""
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <span className="font-bold text-lg">Logo</span>
                </div>

                <ul className="hidden md:flex gap-10 text-sm">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Explore Grid</li>
                    <li className="hover:underline cursor-pointer">Buy A Square</li>
                    <li className="hover:underline cursor-pointer">My Squares</li>
                    <li className="hover:underline cursor-pointer">How It Works</li>
                </ul>

                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    <img
                        src="./images/Nav.png"
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden px-6 pb-4 space-y-2 text-sm bg-white">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Explore Grid</li>
                    <li className="hover:underline cursor-pointer">Buy A Square</li>
                    <li className="hover:underline cursor-pointer">My Squares</li>
                    <li className="hover:underline cursor-pointer">How It Works</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar1;
