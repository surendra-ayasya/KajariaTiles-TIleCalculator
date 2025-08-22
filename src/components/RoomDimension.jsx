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
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 
  const wallMode = inputs.mode?.toLowerCase() === "wall";
  const widthLbl = wallMode ? "Room Width" : "Floor Width";
  const lengthLbl = wallMode ? "Room Length" : "Floor Length";
 
  useEffect(() => {
    if (!inputs.mode) setInputs((prev) => ({ ...prev, mode: "floor" }));
    if (!inputs.roomWidth) setInputs((prev) => ({ ...prev, roomWidth: "" }));
    if (!inputs.roomLength) setInputs((prev) => ({ ...prev, roomLength: "" }));
    if (!inputs.unitWidth) setInputs((prev) => ({ ...prev, unitWidth: "Feet" }));
    if (!inputs.unitLength) setInputs((prev) => ({ ...prev, unitLength: "Feet" }));
    if (!inputs.unitHeight) setInputs((prev) => ({ ...prev, unitHeight: "Feet" }));
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
 
  const handleUnitChange = (field, value) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
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
 
  const unitSelectStyle = {
    backgroundColor: "#f5f6f8",
    border: "none",
    borderRadius: "999px",
    padding: "6px 16px",
    fontWeight: "500",
    width: "100px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    cursor: "pointer",
  };
 
  // Responsive width logic
  const bottomNoteStyle = {
    color: "black",
    display: "block",
    width: windowWidth > 768 ? "600px" : "100%",
    lineHeight: "1.5",
    fontSize: windowWidth < 480 ? "13px" : windowWidth < 768 ? "14px" : "15px",
  };
 
  return (
    <TabLayout
      title={wallMode ? "Room Dimensions" : "Floor Dimensions"}
      bottomNote={
        <span style={bottomNoteStyle}>
          {wallMode
            ? "The tile quantity is an approximate estimate based on standard and assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
            : "The tile quantity is an approximate estimate based on standard and assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation."}
        </span>
      }
      bottomActions={
        <div className="w-100 d-flex justify-content-end">
          <div className="mx-4">
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#083a56")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0c4a6e")
            }
          >
            NEXT →
          </button>
</div>
        </div>
      }
    >
      <div className="p-3 shadow-sm" style={{ border: "none" }}>
        <div className="row g-3">
          {!wallMode && (
            <>
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-bold text-black mb-0">{widthLbl}</label>
                  <div style={{ position: "relative", minWidth: "100px" }}>
                    <select
                      value={inputs.unitWidth || "Feet"}
                      onChange={(e) => handleUnitChange("unitWidth", e.target.value)}
                      className="form-select"
                      style={unitSelectStyle}
                    >
                      <option>Feet</option>
                      <option>Meters</option>
                    </select>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder={`ENTER ${widthLbl.toUpperCase()}`}
                  value={inputs.roomWidth || ""}
                  onChange={(e) => handleChange("roomWidth", e.target.value)}
                  className={`form-control ${errors.width ? "is-invalid" : ""}`}
                  style={{ border: "1px solid #000000", borderRadius: "0.375rem" }}
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
 
              <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-bold text-black mb-0">{lengthLbl}</label>
                  <div style={{ position: "relative", minWidth: "100px" }}>
                    <select
                      value={inputs.unitLength || "Feet"}
                      onChange={(e) => handleUnitChange("unitLength", e.target.value)}
                      className="form-select"
                      style={unitSelectStyle}
                    >
                      <option>Feet</option>
                      <option>Meters</option>
                    </select>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder={`ENTER ${lengthLbl.toUpperCase()}`}
                  value={inputs.roomLength || ""}
                  onChange={(e) => handleChange("roomLength", e.target.value)}
                  className={`form-control ${errors.length ? "is-invalid" : ""}`}
                  style={{ border: "1px solid #000000", borderRadius: "0.375rem" }}
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
            </>
          )}
 
          {wallMode && (
            <>
              <div className="col-md-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-bold text-black mb-0">Room Width</label>
                  <div style={{ position: "relative", minWidth: "100px" }}>
                    <select
                      value={inputs.unitWidth || "Feet"}
                      onChange={(e) => handleUnitChange("unitWidth", e.target.value)}
                      className="form-select"
                      style={unitSelectStyle}
                    >
                      <option>Feet</option>
                      <option>Meters</option>
                    </select>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="ENTER ROOM WIDTH"
                  value={inputs.roomWidth || ""}
                  onChange={(e) => handleChange("roomWidth", e.target.value)}
                  className={`form-control ${errors.width ? "is-invalid" : ""}`}
                  style={{ border: "1px solid #000000", borderRadius: "0.375rem" }}
                />
                <div
                  className="invalid-feedback"
                  style={{
                    minHeight: "1.25rem",
                    display: "block",
                    visibility: errors.width ? "visible" : "hidden",
                  }}
                >
                  Room Width is required.
                </div>
              </div>
 
              <div className="col-md-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-bold text-black mb-0">Room Length</label>
                  <div style={{ position: "relative", minWidth: "100px" }}>
                    <select
                      value={inputs.unitLength || "Feet"}
                      onChange={(e) => handleUnitChange("unitLength", e.target.value)}
                      className="form-select"
                      style={unitSelectStyle}
                    >
                      <option>Feet</option>
                      <option>Meters</option>
                    </select>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="ENTER ROOM LENGTH"
                  value={inputs.roomLength || ""}
                  onChange={(e) => handleChange("roomLength", e.target.value)}
                  className={`form-control ${errors.length ? "is-invalid" : ""}`}
                  style={{ border: "1px solid #000000", borderRadius: "0.375rem" }}
                />
                <div
                  className="invalid-feedback"
                  style={{
                    minHeight: "1.25rem",
                    display: "block",
                    visibility: errors.length ? "visible" : "hidden",
                  }}
                >
                  Room Length is required.
                </div>
              </div>
 
              <div className="col-md-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <label className="form-label fw-bold text-black mb-0">Room Height</label>
                  <div style={{ position: "relative", minWidth: "100px" }}>
                    <select
                      value={inputs.unitHeight || "Feet"}
                      onChange={(e) => handleUnitChange("unitHeight", e.target.value)}
                      className="form-select"
                      style={unitSelectStyle}
                    >
                      <option>Feet</option>
                      <option>Meters</option>
                    </select>
                  </div>
                </div>
                <input
                  type="number"
                  placeholder="ENTER ROOM HEIGHT"
                  value={inputs.roomHeight || ""}
                  onChange={(e) => handleChange("roomHeight", e.target.value)}
                  className={`form-control ${errors.extra ? "is-invalid" : ""}`}
                  style={{ border: "1px solid #000000", borderRadius: "0.375rem" }}
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
            </>
          )}
        </div>
      </div>
    </TabLayout>
  );
};
 
export default RoomDimensions;
 
 