import React from "react";

const ToggleSwitch = ({ value, onChange }) => {
  const isFloor = value === "floor";

  return (
    <div className="relative flex w-3xs h-10 bg-[#f5f5f5] border-2 border-[#0c4a6e] rounded-full p-1 overflow-hidden m-2">
      {/* Blue animated toggle with padding-based gap */}
      <div
        className={`absolute top-1 bottom-1 left-1 bg-[#0c4a6e] rounded-full transition-transform duration-300 ease-in-out w-[calc(50%-4px)] ${
          isFloor ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      {/* Toggle buttons */}
      <button
        className={`flex-1 z-10 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
          isFloor ? "text-white" : "text-[#0c4a6e]"
        }`}
        onClick={() => onChange("floor")}
      >
        FLOOR
      </button>
      <button
        className={`flex-1 z-10 text-sm font-semibold transition-colors duration-300 cursor-pointer ${
          !isFloor ? "text-white" : "text-[#0c4a6e]"
        }`}
        onClick={() => onChange("wall")}
      >
        WALL
      </button>
    </div>
  );
};

export default ToggleSwitch;
