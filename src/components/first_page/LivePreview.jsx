import React, { useMemo } from "react";

const COLORS = [
  "bg-red-400",
  "bg-orange-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-teal-300",
  "bg-cyan-300",
  "bg-blue-400",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-pink-300",
];

const GRID_ROWS = 10;
const GRID_COLS = 10;
const TOTAL_CELLS = GRID_ROWS * GRID_COLS;

function Live_preview() {
  const grid = useMemo(() => {
    // Generate an array of random colors or empty cells
    return Array.from({ length: TOTAL_CELLS }, () => {
      const useColor = Math.random() > 0.4; // 60% chance to color a cell
      return useColor
        ? COLORS[Math.floor(Math.random() * COLORS.length)]
        : "bg-gray-100";
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-4xl font-bold mb-2">Live Preview</h2>
      <p className="text-gray-500 font-semibold mb-6">
        See what others are creating in real-time
      </p>

      <div className="p-4 rounded-2xl shadow-md bg-white">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            width: "400px",
            height: "400px",
          }}
        >
          {grid.map((colorClass, index) => (
            <div
              key={index}
              className={`w-full h-full ${colorClass} transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      <button className="mt-6 px-5 py-2 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition">
        Explore Full Grid →
      </button>
    </div>
  );
}
export default Live_preview;
