import React from "react";

const steps = [
  { id: 1, label: "AREA SIZE" },
  { id: 2, label: "TILE SIZE" },
  { id: 3, label: "RESULT" },
];

const StepTabs = ({ currentStep }) => {
  const primaryColor = "#0c4a6e";

  return (
    <div
      className="w-100 d-flex flex-column align-items-center"
      style={{ paddingTop: "3rem", zIndex: 1, position: "relative" }} // lower z-index
    >
      <div
        className="position-relative d-flex w-100 justify-content-between align-items-center px-3"
        style={{ maxWidth: "28rem" }}
      >
        {/* Step line container */}
        <div
          className="position-absolute top-50 start-0 end-0 translate-middle-y d-flex justify-content-between align-items-center px-3"
          style={{ zIndex: 0 }} // background line has lowest z-index
        >
          {/* Line from Step 1 to Step 2 */}
          <div className="flex-grow-1 bg-secondary position-relative ms-4" style={{ height: 3 }}>
            <div
              className="position-absolute top-0 start-0 h-100"
              style={{
                backgroundColor: primaryColor,
                width: currentStep >= 2 ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
                zIndex: 1,
              }}
            />
          </div>

          {/* Line from Step 2 to Step 3 */}
          <div className="flex-grow-1 bg-secondary position-relative mx-2" style={{ height: 3 }}>
            <div
              className="position-absolute top-0 start-0 h-100"
              style={{
                backgroundColor: primaryColor,
                width: currentStep >= 3 ? "100%" : "0%",
                transition: "width 0.5s ease-in-out",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        {/* Step circles with labels */}
        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          const bgColor = isActive || isCompleted ? primaryColor : "#e5e7eb";
          const textColor = isActive || isCompleted ? "white" : "black";
          const borderColor = isActive || isCompleted ? primaryColor : "#d1d5db";
          const labelColor = currentStep >= step.id ? primaryColor : "black";

          return (
            <div
              key={step.id}
              className="position-relative d-flex flex-column align-items-center"
              style={{ zIndex: 2 }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle border"
                style={{
                  width: 46,
                  height: 46,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: bgColor,
                  color: textColor,
                  borderColor: borderColor,
                  transition: "all 0.3s",
                  userSelect: "none",
                }}
              >
                {step.id}
              </div>
              <span
                className="mt-2 fw-semibold"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.05em",
                  color: labelColor,
                  userSelect: "none",
                }}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepTabs;
