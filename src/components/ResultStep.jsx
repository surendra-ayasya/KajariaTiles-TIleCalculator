import React, { useContext } from "react";
import { FiInfo } from "react-icons/fi";
import TileInputsContext from "../context/TileInputsContext";
import TabLayout from "../components/TabLayout";

const ResultStep = ({ onBack, onRecalculate }) => {
  const { inputs } = useContext(TileInputsContext);

  return (
    <TabLayout
      title="Result"
      bottomActions={
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="border border-gray-400 text-black px-6 py-2 rounded hover:bg-gray-100 transition flex items-center gap-1"
          >
            ← BACK
          </button>
          <button
            onClick={onRecalculate}
            className="bg-[#0c4a6e] text-white px-6 py-2 font-semibold rounded hover:bg-[#083a56] transition"
          >
            RE-CALCULATE →
          </button>
        </div>
      }
    >
      {/* Result Section */}
      <div className="w-full  pt-10 pb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Tiles */}
          <div className="text-center">
            <p className="text-4xl font-bold">{inputs.totalTilesNeeded}</p>
            <p className="mt-1 text-sm font-semibold tracking-wide">TILES NEEDED</p>
          </div>

          {/* Divider */}
          <div className="h-12 w-px bg-gray-300 hidden md:block"></div>

          {/* Boxes */}
          <div className="text-center">
            <p className="text-4xl font-bold">{inputs.totalBoxesNeeded}</p>
            <p className="mt-1 text-sm font-semibold tracking-wide">BOXES NEEDED</p>
          </div>
        </div>

        {/* Learn how it works */}
        <div className="flex justify-center items-center gap-2 mt-6 text-gray-500 text-sm">
          <FiInfo className="text-base" />
          <span>Learn how it works?</span>
        </div>
      </div>

    </TabLayout>
  );
};

export default ResultStep;
