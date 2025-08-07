import React, { useContext } from "react";
import { FiInfo } from "react-icons/fi";
import TileInputsContext from "../context/TileInputsContext";
import TabLayout from "../components/TabLayout";

const ResultStep = ({ onBack, onRecalculate }) => {
  const { inputs } = useContext(TileInputsContext);
  const wallMode = inputs.mode === "Wall" || inputs.mode === "wall";

  const bottomNoteText = wallMode
    ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
    : "The tile quantity is an approximate estimate based on standard assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation.";

  return (
    <TabLayout
      title="Result"
      bottomActions={
        <div className="w-100 d-flex justify-content-end align-items-center gap-3">
          <button
            onClick={onBack}
            className="btn btn-outline-secondary d-flex align-items-center gap-1"
            style={{ padding: "0.5rem 1.5rem" }}
          >
            ← BACK
          </button>
          <button
            onClick={onRecalculate}
            className="btn text-white px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#0c4a6e",
              color: "white",
              padding: "0.5rem 1.5rem",
              fontWeight: "600",
              borderRadius: "0.375rem",
              transition: "background-color 0.3s",
              border: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#083a56")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0c4a6e")}
          >
            RE-CALCULATE →
          </button>
        </div>
      }
      bottomNote={bottomNoteText}
    >
      <div className="w-100 pt-4 pb-3">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 gap-md-5">
          {/* Tiles */}
          <div className="text-center">
            <p className="display-4 fw-bold mb-1 text-black">{inputs.totalTilesNeeded}</p>
            <p className="small fw-semibold text-uppercase text-black" style={{ letterSpacing: "0.1em" }}>
              TILES NEEDED
            </p>
          </div>

          {/* Divider */}
          <div className="d-none d-md-block" style={{ width: "1px", height: "3rem", backgroundColor: "#dee2e6" }}></div>

          {/* Boxes */}
          <div className="text-center">
            <p className="display-4 fw-bold mb-1 text-black">{inputs.totalBoxesNeeded}</p>
            <p className="small fw-semibold text-uppercase text-black" style={{ letterSpacing: "0.1em" }}>
              BOXES NEEDED
            </p>
          </div>
        </div>

        {/* Learn how it works */}
        <div className="d-flex justify-content-center align-items-center gap-2 mt-3 text-muted small">
          <FiInfo className="fs-5" />
          <span>Learn how it works?</span>
        </div>
      </div>
    </TabLayout>
  );
};

export default ResultStep;
