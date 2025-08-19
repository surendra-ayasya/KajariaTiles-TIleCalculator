import React, { useContext, useState } from "react";
import TileInputsContext from "../context/TileInputsContext";
import { calculateTiles } from "../utils/calculateTiles";
import TabLayout from "../components/TabLayout";

const TileSizeStep = ({ onNext, onBack }) => {
  const { inputs, setInputs } = useContext(TileInputsContext);
  const wallMode = inputs.mode === "Wall" || inputs.mode === "wall";
  const [error, setError] = useState(false);

  const tileSizes = [
    "1200x1200", "1200x1800", "1200x2400", "130x800", "150x600", "195x1200",
    "200x1200", "200x200", "200x232", "200x300", "220x250", "285x1800",
    "300x1200", "300x300", "300x450", "300x600", "400x400", "600x1200",
    "600x600", "75x300", "800x1600", "800x2400", "800x2600", "800x800", "80x450"
  ];

  const pcsPerBoxMap = {
    "1200x1200": 2, "1200x1800": 2, "1200x2400": 1, "130x800": 10, "150x600": 8,
    "195x1200": 4, "200x1200": 6, "200x200": 18, "200x232": 18, "200x300": 15,
    "220x250": 25, "285x1800": 2, "300x1200": 4, "300x300": 10, "300x450": 10,
    "300x600": 5, "400x400": 5, "600x1200": 3, "600x600": 4, "75x300": 20,
    "800x1600": 2, "800x2400": 1, "800x2600": 1, "800x800": 3, "80x450": 30
  };

  const handleTileSizeChange = (value) => {
    setInputs({
      ...inputs,
      tileSize: value,
      peicesPerBox: pcsPerBoxMap[value] || null,
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
      wastage: "10",
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

  const bottomNoteText = (
    <span
      style={{
        color: "black",
        display: "block",
        width: "530px", // increased width for 3 lines
        lineHeight: "1.5",
      }}
    >
      {wallMode
        ? "The tile quantity is an approximate estimate based on standard and assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
        : "The tile quantity is an approximate estimate based on standard and assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation."}
    </span>
  );

  return (
    <TabLayout
      title="Select Size of Tiles"
      bottomNote={bottomNoteText}
      bottomActions={
        <div className="d-flex justify-content-end align-items-center gap-3 mt-4">
          <button
            onClick={onBack}
            className="btn btn-outline-secondary px-4 py-2"
          >
            ← BACK
          </button>
          <button
            onClick={handleCalculate}
            className="btn text-white px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#0c4a6e",
              borderColor: "#0c4a6e",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "#083a56")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "#0c4a6e")
            }
          >
            CALCULATE NOW →
          </button>
        </div>
      }
    >
      <div className="mb-4">
        <label className="form-label fw-semibold small mb-2">
          Select Size of Tiles
        </label>
        <select
          value={inputs.tileSize}
          onChange={(e) => handleTileSizeChange(e.target.value)}
          className="form-select"
        >
          <option value="">-- Select --</option>
          {tileSizes.map((size) => (
            <option key={size} value={size}>
              {size.toUpperCase()} MM
            </option>
          ))}
        </select>
        {error && (
          <div className="text-danger small mt-1">
            Please select a tile size.
          </div>
        )}
      </div>
    </TabLayout>
  );
};

export default TileSizeStep;
