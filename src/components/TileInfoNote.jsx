import { useContext } from "react";
import TileInputsContext from "../context/TileInputsContext";

const TileInfoNote = () => {
  const { inputs } = useContext(TileInputsContext);
  const isWall = inputs.mode === "Wall" || inputs.mode === "wall";

  if (!isWall) return null;

  return (
    <div className="mt-4 bg-primary bg-opacity-10 border border-primary text-primary p-3 rounded">
      <h4 className="fw-semibold mb-1 fs-6">Wall Tile Calculation</h4>
      <p className="mb-1">
        Total Wall Area = 2 × (Bathroom Width + Bathroom Length) × Wall Height
      </p>
      <p className="mb-1">
        Total Door Area = Door Width × Door Height (Standard Size: 3ft × 7ft)
      </p>
      <p>
        Final Tiling Area = Wall Area - Door Area
      </p>
    </div>
  );
};

export default TileInfoNote;
