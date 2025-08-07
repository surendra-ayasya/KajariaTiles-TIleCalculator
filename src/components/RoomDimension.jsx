import React, { useContext, useEffect, useState } from "react";
import TabLayout from "../components/TabLayout";
import TileInputsContext from "../context/TileInputsContext";

const RoomDimensions = ({ onNext }) => {
  const context = useContext(TileInputsContext);
  if (!context) {
    console.error("TileInputsContext is not provided");
    return <div>Error: Context not provided</div>;
  }

  const { inputs = {}, setInputs = () => {} } = context;

  const [errors, setErrors] = useState({
    width: false,
    length: false,
    extra: false,
  });

  const wallMode = inputs.mode?.toLowerCase() === "wall";
  const widthLbl = wallMode ? "Room Width" : "Floor Width";
  const lengthLbl = wallMode ? "Room Length" : "Floor Length";

  useEffect(() => {
    if (!inputs.mode) setInputs((prev) => ({ ...prev, mode: "floor" }));
    if (!inputs.roomWidth) setInputs((prev) => ({ ...prev, roomWidth: "" }));
    if (!inputs.roomLength) setInputs((prev) => ({ ...prev, roomLength: "" }));
    if (wallMode && !inputs.roomHeight) {
      setInputs((prev) => ({ ...prev, roomHeight: "" }));
    }
    if (!wallMode && !inputs.skirtingHeight) {
      setInputs((prev) => ({ ...prev, skirtingHeight: "0.33" }));
    }
  }, [wallMode, setInputs]);

  const handleChange = (field, value) => {
    const numericValue = value === "" ? "" : isNaN(value) ? inputs[field] : value;
    setInputs((prev) => ({ ...prev, [field]: numericValue }));
  };

  const handleNext = () => {
    const newErrors = {
      width: inputs.roomWidth === "",
      length: inputs.roomLength === "",
      extra: wallMode ? inputs.roomHeight === "" : false,
    };
    setErrors(newErrors);
    const isValid = !newErrors.width && !newErrors.length && !newErrors.extra;
    if (isValid) onNext();
  };

  const bottomNoteText = wallMode
    ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
    : "The tile quantity is an approximate estimate based on standard assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation.";

  return (
    <TabLayout
      title={wallMode ? "Room Dimensions" : "Floor Dimensions"}
      bottomNote={bottomNoteText}
      bottomActions={
        <div className="w-100 d-flex justify-content-end">
          <button
            onClick={handleNext}
            className="btn text-white px-4 py-2 fw-semibold"
            style={{
              backgroundColor: "#0c4a6e",
              color: "white",
              padding: "0.5rem 1.5rem",
              fontWeight: "600",
              borderRadius: "0.375rem",
              border: "none",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#083a56")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0c4a6e")}
          >
            NEXT →
          </button>
        </div>
      }
    >
      <div className="p-3 shadow-sm" style={{ border: "none" }}>
        <div className="row g-2 align-items-end">
          <div className="col-md-4">
            <label className="form-label fw-bold text-black">{widthLbl}</label>
            <input
              type="number"
              placeholder={`ENTER ${widthLbl.toUpperCase()}`}
              value={inputs.roomWidth || ""}
              onChange={(e) => handleChange("roomWidth", e.target.value)}
              className={`form-control ${errors.width ? "is-invalid" : ""}`}
              style={{ border: "1px solid #000000", borderRadius: 0 }}
            />
            <div
              className="invalid-feedback"
              style={{
                minHeight: "1.25rem",
                display: "block",
                visibility: errors.width ? "visible" : "hidden",
              }}
            >
              {widthLbl} is required.
            </div>
          </div>

          <div className="col-md-4">
            <label className="form-label fw-bold text-black">{lengthLbl}</label>
            <input
              type="number"
              placeholder={`ENTER ${lengthLbl.toUpperCase()}`}
              value={inputs.roomLength || ""}
              onChange={(e) => handleChange("roomLength", e.target.value)}
              className={`form-control ${errors.length ? "is-invalid" : ""}`}
              style={{ border: "1px solid #000000", borderRadius: 0 }}
            />
            <div
              className="invalid-feedback"
              style={{
                minHeight: "1.25rem",
                display: "block",
                visibility: errors.length ? "visible" : "hidden",
              }}
            >
              {lengthLbl} is required.
            </div>
          </div>

          {wallMode && (
            <div className="col-md-4">
              <label className="form-label fw-bold text-black">Room Height</label>
              <input
                type="number"
                placeholder="ENTER ROOM HEIGHT"
                value={inputs.roomHeight || ""}
                onChange={(e) => handleChange("roomHeight", e.target.value)}
                className={`form-control ${errors.extra ? "is-invalid" : ""}`}
                style={{ border: "1px solid #000000", borderRadius: 0 }}
              />
              <div
                className="invalid-feedback"
                style={{
                  minHeight: "1.25rem",
                  display: "block",
                  visibility: errors.extra ? "visible" : "hidden",
                }}
              >
                Room Height is required.
              </div>
            </div>
          )}
        </div>
      </div>
    </TabLayout>
  );
};

export default RoomDimensions;
