import React, { useContext, useState } from "react";
import TileInputsContext from "../context/TileInputsContext";
import { calculateTiles } from "../utils/calculateTiles";
import TabLayout from "../components/TabLayout";

const TileSizeStep = ({ onNext, onBack }) => {
  const { inputs, setInputs } = useContext(TileInputsContext);
  const wallMode = inputs.mode === "Wall" || inputs.mode === "wall";

  const [error, setError] = useState(false);

  const tileSizes = ["1000x1000", "600x600", "300x600"];
  const pcsPerBoxMap = {
    "1000x1000": 8,
    "600x600": 5,
    "300x600": 12,
  };

  const handleTileSizeChange = (value) => {
    setInputs({
      ...inputs,
      tileSize: value,
      peicesPerBox: pcsPerBoxMap[value] || null, // auto-set pcs/box
    });
    setError(false);
  };

  const handleCalculate = () => {
    if (!inputs.tileSize) {
      setError(true);
      return;
    }

    const result = calculateTiles({
      ...inputs,
      peicesPerBox: inputs.peicesPerBox,
      wastage: "10", // fixed
    });

    if (result) {
      setInputs({
        ...inputs,
        totalTilesNeeded: result.tiles,
        totalBoxesNeeded: result.boxes,
        wastage: "10",
        currentStep: 3,
      });
    }
  };

  const bottomNoteText = wallMode
    ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
    : "The tile quantity is an approximate estimate based on standard assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation.";

  return (
    <TabLayout
      title="Select Size of Tiles"
      bottomNote={bottomNoteText}
      bottomActions={
        <div className="flex justify-end gap-3 items-center">
          <button
            onClick={onBack}
            className="border border-gray-400 text-black px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            ← BACK
          </button>
          <button
            onClick={handleCalculate}
            className="bg-[#0c4a6e] text-white px-6 py-2 font-semibold rounded hover:bg-[#083a56] transition"
          >
            CALCULATE NOW →
          </button>
        </div>
      }
    >
      {/* Tile size dropdown */}
      <div className="mb-6">
        <label className="font-semibold text-sm block mb-2">Select Size of Tiles</label>
        <select
          value={inputs.tileSize}
          onChange={(e) => handleTileSizeChange(e.target.value)}
          className="w-full border px-3 py-2 text-sm"
        >
          <option value="">-- Select --</option>
          {tileSizes.map((size) => (
            <option key={size} value={size}>
              {size.toUpperCase()} MM
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-600 text-xs mt-1">Please select a tile size.</p>
        )}
      </div>

      {/* Auto-show PCS/Box Info */}
      
    </TabLayout>
  );
};

export default TileSizeStep;
