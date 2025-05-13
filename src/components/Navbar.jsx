import React from "react";

function navbar() {
  return (
    <div className="flex justify-between bg-white p-6">
      <div className="text-2xl font-semibold text-blue-600">
        <a href="">Online Graffiti</a>
      </div>
      <div className="flex gap-9 font-semibold text-gray-500">
        <a href="">Grid</a>
        <a href="">Drawing Tool</a>
        <a href="">Payment Model</a>
        <a href="">My Squares</a>
      </div>
      <button className="text-gray-500 font-semibold">Buy a Square</button>
    </div>
  );
}

export default navbar;
