import React from "react";
import ModeSelector from "./ModeSelector";
import { FiInfo } from "react-icons/fi";

const TabLayout = ({ title, children, bottomActions, bottomNote }) => {
  return (
    <div className="w-100 mx-auto my-4 p-4 p-md-5 shadow rounded bg-white" style={{ maxWidth: '64rem' }}>
      {/* Title */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
        <h2 className="text-secondary text-uppercase fw-semibold fs-4 mb-3 mb-md-0" style={{ letterSpacing: '0.1em' }}>
          {title}
        </h2>
        <ModeSelector />
      </div>

      {/* Top line */}
      <hr className="mb-4 border-secondary" />

      {/* Main Content */}
      <div className="mb-4">{children}</div>

      {/* Bottom line */}
      <hr className="mt-4 border-secondary" />

      {/* Bottom row: Note (left) and Buttons (right) */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-3 gap-3">
        {/* Left-side info note (only in wall mode) */}
        {bottomNote ? (
          <div className="text-muted small d-flex align-items-start gap-2" style={{ maxWidth: '384px', lineHeight: '1.3' }}>
            <span className="mt-1 fw-bold fs-5"><FiInfo /></span>
            <p className="fw-bold mb-0">{bottomNote}</p>
          </div>
        ) : (
          <div></div> // keeps layout aligned when no note
        )}

        {/* Right-side actions */}
        {bottomActions && <div className="flex-shrink-0">{bottomActions}</div>}
      </div>
    </div>
  );
};

export default TabLayout;