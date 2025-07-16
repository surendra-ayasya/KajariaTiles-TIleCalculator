import { useCallback, useState } from "react";
import TileInputsContext from "./TileInputsContext";

const defaultState = {
  inputs: {
    roomLength: "",
    roomWidth: "",
    roomHeight: "",
    skirtingHeight: "",

    unit: "Feet",
    tileSize: "1000x1000",
    grout: "00",
    wastage: "00",
    peicesPerBox: "",

    mode: "Wall",
    totalTilesNeeded: 0,
    totalBoxesNeeded: 0,

    tileWidthMM: 1000,
    tileHeightMM: 1000,

    roomAreaInM2: 0,
    currentStep: 1,
  },
};

const TileInputsContextProvider = ({ children }) => {
  /* state holds ONLY defaultState.inputs */
  const [inputs, setInputs] = useState(defaultState.inputs);

  /* reset to the exact same shape */
  const resetInputs = useCallback(
    () => setInputs(defaultState.inputs),
    []
  );

  return (
    <TileInputsContext.Provider value={{ inputs, setInputs, resetInputs }}>
      {children}
    </TileInputsContext.Provider>
  );
};

export default TileInputsContextProvider;
