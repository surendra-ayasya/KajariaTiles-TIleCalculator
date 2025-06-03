import { useContext, useState } from "react";
import StepTabs from "../components/StepTabs";
import TileInputsContext from "../context/TileInputsContext";
import RoomDimensions from "../components/RoomDimension";
import TileSizeStep from "../components/TileSizeStep";
import ResultStep from "../components/ResultStep";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const TileCalculator = () => {
  const { inputs, setInputs } = useContext(TileInputsContext);
  const [direction, setDirection] = useState("forward");

  const goToStep = (step) => {
    setDirection(step > inputs.currentStep ? "forward" : "backward");
    setInputs({ ...inputs, currentStep: step });
  };

  return (
    <div className="h-screen  pt-30 mb-36 ">
      <h1 className="text-4xl font-bold text-center m-6  ">
        Calculate Your Tile Needs
      </h1>
      <p className="text-center text-gray-500 mt-2">
        Quickly determine how many tiles you need for your space. Just enter your dimensions, and let <br />
        our tool handle the rest—simple, smart, and stress-free.
      </p>
      <div className="w-full max-w-6xl mx-auto">
        <StepTabs currentStep={inputs.currentStep} />

        {inputs.currentStep === 1 && (
          <div className={direction === "backward" ? "animate-[slide-in-right_0.4s_ease-out]" : "animate-[slide-in-left_0.4s_ease-out]"}>
            <RoomDimensions onNext={() => goToStep(2)} />
          </div>
        )}

        {inputs.currentStep === 2 && (
          <div className={direction === "forward" ? "animate-[slide-in-left_0.4s_ease-out]" : "animate-[slide-in-right_0.4s_ease-out]"}>
            <TileSizeStep onNext={() => goToStep(3)} onBack={() => goToStep(1)} />
          </div>
        )}
        {inputs.currentStep === 3 && (
          <div className={direction === "forward" ? "animate-[slide-in-left_0.4s_ease-out]" : "animate-[slide-in-right_0.4s_ease-out]"}>
            <ResultStep onRecalculate={() => goToStep(1)} onBack={() => goToStep(2)} />
          </div>
        )}
        {/* Add similar block for Step 3 if needed */}
      </div>

    </div>
  );
};

export default TileCalculator;
