import { useContext, useState } from "react";
import StepTabs from "../components/StepTabs";
import TileInputsContext from "../context/TileInputsContext";
import RoomDimensions from "../components/RoomDimension";
import TileSizeStep from "../components/TileSizeStep";
import ResultStep from "../components/ResultStep";

const TileCalculator = () => {
  const { resetInputs } = useContext(TileInputsContext);
  const { inputs, setInputs } = useContext(TileInputsContext);
  const [direction, setDirection] = useState("forward");

  const goToStep = (step) => {
    setDirection(step > inputs.currentStep ? "forward" : "backward");
    setInputs({ ...inputs, currentStep: step });
  };

  return (
    <div className="pt-5 mb-5">
      <h1 className="display-5 fw-bold text-center mb-3">
        Calculate Your Tile Needs
      </h1>
      <p className="text-center text-black">
        Quickly determine how many tiles you need for your space. Just enter your dimensions,<br />
        and let our tool handle the rest—simple, smart, and stress-free.
      </p>

      <div className="container ">
        <StepTabs currentStep={inputs.currentStep} />

        {inputs.currentStep === 1 && (
          <div className={direction === "backward" ? "slide-right-animation" : "slide-left-animation"}>
            <RoomDimensions onNext={() => goToStep(2)} />
          </div>
        )}

        {inputs.currentStep === 2 && (
          <div className={direction === "forward" ? "slide-left-animation" : "slide-right-animation"}>
            <TileSizeStep onNext={() => goToStep(3)} onBack={() => goToStep(1)} />
          </div>
        )}

        {inputs.currentStep === 3 && (
          <div className={direction === "forward" ? "slide-left-animation" : "slide-right-animation"}>
            <ResultStep
              onRecalculate={() => {
                goToStep(1);
                resetInputs();
              }}
              onBack={() => goToStep(2)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TileCalculator;