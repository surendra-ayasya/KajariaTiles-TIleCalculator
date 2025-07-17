import React from "react";
import ModeSelector from "./ModeSelector";
import { FiInfo } from "react-icons/fi";

const TabLayout = ({ title, children, bottomActions, bottomNote }) => {
  return (
    <div className="w-full max-w-4xl px-6 py-6 shadow-lg rounded-lg bg-white mx-auto my-8">
      {/* Title */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-y-2">
        <h2 className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-4">
          {title}
        </h2>
        <ModeSelector />
      </div>

      {/* Top line */}
      <hr className="mb-6 border-gray-200" />

      {/* Main Content */}
      <div className="mb-6">{children}</div>

      {/* Bottom line */}
      <hr className="mt-6 border-gray-200" />

      {/* Bottom row: Note (left) and Buttons (right) */}
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Left-side info note (only in wall mode) */}
        {bottomNote ? (
          <div className="text-xs text-gray-600 flex items-start gap-2 max-w-md leading-snug">
            <span className="mt-2 text-sm font-bold"><FiInfo /></span>
            <p className="font-bold">
              {bottomNote}
            </p>
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
