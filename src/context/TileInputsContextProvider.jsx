import { useState } from "react";
import TileInputsContext from "./TileInputsContext";

const defaultState = {
    inputs: {
        roomLength: "",
        roomWidth: "",
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


    }
}

const TileInputsContextProvider = ({children}) =>{
    const [inputs, setInputs] = useState(defaultState.inputs)

    return(
        <TileInputsContext.Provider value={{inputs, setInputs}}>
            {children}
        </TileInputsContext.Provider>
    )
}

export default TileInputsContextProvider;