import { useContext } from "react";
import TileInputsContext from "../context/TileInputsContext";

const TileInfoNote = () => {
  const { inputs } = useContext(TileInputsContext);
  const isWall = inputs.mode === "Wall" || inputs.mode === "wall";

  if (!isWall) return null;

  return (
    <div className="mt-6 bg-blue-50 border border-blue-300 text-blue-900 p-4 text-sm rounded-lg">
      <h4 className="font-semibold mb-1">Wall Tile Calculation</h4>
      <p>
        Total Wall Area = 2 × (Bathroom Width + Bathroom Length) × Wall Height
      </p>
      <p>
        Total Door Area = Door Width × Door Height (Standard Size: 3ft × 7ft)
      </p>
      <p>
        Final Tiling Area = Wall Area - Door Area
      </p>
    </div>
  );
};
export default TileInfoNote;