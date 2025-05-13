import React from "react";
import own_peace from "../Assets/own_peace.png";
import own_peace2 from "../Assets/own_peace2.png";

function Own_a_peace() {
  return (
    <>
      <div className="h-[609px]  bg-gradient-to-tl from-[#8B5CF6E5]  to-[#6366F1E5] flex justify-between items-center">
        <div className="text-6xl text-white font-bold p-14 flex flex-col gap-11">
          <h1>Own a Peace Of</h1>
          <h1> Web - Online</h1>
          <h1>Graffiti</h1>
        </div>
        <div className="mr-28 relative">
          <img src={own_peace} alt="" />
        </div>
        <div className="absolute bottom-[170px] right-24">
          <img src={own_peace2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Own_a_peace;
