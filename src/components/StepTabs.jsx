import React from "react";

const steps = [
  { id: 1, label: "AREA SIZE" },
  { id: 2, label: "TILE SIZE" },
  { id: 3, label: "RESULT" },
];

const StepTabs = ({ currentStep }) => {
  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="relative flex w-full max-w-md justify-between items-center px-6 sm:px-4 xs:px-2">

        {/* Step line container */}
        <div className="absolute top-3.5 left-0 right-0 px-6 sm:px-4 xs:px-2 z-0 flex justify-between items-center">
          {/* Line from Step 1 to Step 2 */}
          <div className="flex-1 h-[3px] bg-gray-200 relative ml-5">
            <div
              className={`h-full bg-[#0c4a6e] transition-all duration-500 ease-in-out`}
              style={{
                width: currentStep >= 2 ? "100%" : "0%",
              }}
            ></div>
          </div>

          {/* Line from Step 2 to Step 3 */}
          <div className="flex-1 h-[3px] bg-gray-200 relative mx-3">
            <div
              className={`h-full bg-[#0c4a6e] transition-all duration-500 ease-in-out`}
              style={{
                width: currentStep >= 3 ? "100%" : "0%",
              }}
            ></div>
          </div>
        </div>

        {/* Step circles with labels */}
        {steps.map((step) => (
          <div className="relative z-10 flex flex-col items-center" key={step.id}>
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-semibold border transition duration-300 ${
                currentStep === step.id
                  ? "bg-[#0c4a6e] text-white border-[#0c4a6e]"
                  : currentStep > step.id
                  ? "bg-[#0c4a6e] text-white border-[#0c4a6e]"
                  : "bg-gray-200 text-black border-gray-300"
              }`}
            >
              {step.id}
            </div>
            <span
              className={`mt-2 text-xs font-semibold tracking-wide ${
                currentStep >= step.id ? "text-[#0c4a6e]" : "text-black"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTabs;
