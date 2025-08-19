import React from "react";

const ToggleSwitch = ({ value, onChange }) => {
  const isFloor = value === "floor";

  const toggleStyle = {
    position: "absolute",
    top: "4px",
    bottom: "4px",
    left: isFloor ? "4px" : "calc(50% + 2px)",
    width: "calc(50% - 6px)",
    backgroundColor: "#0c4a6e",
    borderRadius: "9999px",
    transition: "all 0.3s ease-in-out",
    zIndex: 0, // stays lowest
  };

  const containerStyle = {
    width: "200px",
    height: "40px",
    backgroundColor: "#f5f5f5",
    border: "2px solid #0c4a6e",
    borderRadius: "9999px",
    padding: "4px",
    position: "relative",
    overflow: "hidden",
    margin: "0.5rem",
    display: "flex",
    zIndex: 0, // container stays under header
  };

  const buttonBase = {
    flex: 1,
    fontSize: "0.875rem",
    fontWeight: 600,
    transition: "color 0.3s ease",
    background: "none",
    border: "none",
    cursor: "pointer",
    position: "relative",
    zIndex: 0, // text/buttons also stay under header
  };

  return (
    <div style={containerStyle}>
      <div style={toggleStyle}></div>

      <button
        style={{
          ...buttonBase,
          color: isFloor ? "#ffffff" : "#0c4a6e",
        }}
        onClick={() => onChange("floor")}
      >
        FLOOR
      </button>
      <button
        style={{
          ...buttonBase,
          color: !isFloor ? "#ffffff" : "#0c4a6e",
        }}
        onClick={() => onChange("wall")}
      >
        WALL
      </button>
    </div>
  );
};

export default ToggleSwitch;
