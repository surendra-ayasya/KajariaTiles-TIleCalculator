import React, { useContext } from "react";
import TileInputsContext from "../context/TileInputsContext";
import ToggleSwitch from "./ToggleSwitch";

const ModeSelector = () => {
  const { inputs, setInputs } = useContext(TileInputsContext);

  const handleToggle = (mode) => {
    setInputs({ ...inputs, mode });
  };

  return (
    <div className="mb-4">
      <ToggleSwitch value={inputs.mode.toLowerCase()} onChange={handleToggle} />
    </div>
  );
};

export default ModeSelector;
