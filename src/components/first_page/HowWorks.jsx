import React from "react";

function How_works() {
  const steps = [
    {
      no: 1,
      title: "Choose a Square",
      discriptin:
        "Browse the grid and select any availables quare that catches your eye",
    },
    {
      no: 2,
      title: "Pay $1",
      discriptin:
        "Make a one-time payment of just $1 to claim ownership of your square.",
    },
    {
      no: 3,
      title: "Draw Your Design",
      discriptin:
        "Use our simple drawing tool to create your unique contribution to the mosaic.",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center py-10 ">
          <h1 className="text-4xl font-bold">How It Works</h1>
          <p className="font-semibold text-gray-500 mt-3">
            Join the mosaic in three simle steps
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 ">
          {steps.map((step) => (
            <div className="flex flex-col items-center justify-center w-[384px] border shadow-lg p-8 rounded-xl">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center">
                <h1 className="text-2xl font-bold">{step.no}</h1>
              </div>
              <h1 className="text-xl font-bold mt-4">{step.title}</h1>
              <p className="text-gray-500 mt-2">{step.discriptin}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default How_works;
