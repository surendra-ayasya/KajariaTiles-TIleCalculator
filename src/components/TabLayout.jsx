import React from "react";
import ModeSelector from "./ModeSelector";

const TabLayout = ({ title, children, bottomActions }) => {
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

            {/* Content */}
            <div className="mb-6">{children}</div>

            {/* Bottom line */}
            <hr className="mt-6 border-gray-200" />

            {/* Optional bottom buttons */}
            {bottomActions && <div className="mt-6">{bottomActions}</div>}
        </div>
    );
};

export default TabLayout;
