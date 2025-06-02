import React, { useContext, useState } from "react";
import TabLayout from "../components/TabLayout";
import TileInputsContext from "../context/TileInputsContext";

const RoomDimensions = ({ onNext }) => {
    const { inputs, setInputs } = useContext(TileInputsContext);
    const [errors, setErrors] = useState({ width: false, length: false });

    const handleChange = (field, value) => {
        setInputs({ ...inputs, [field]: value });

        // Clear error on typing
        setErrors((prev) => ({
            ...prev,
            [field === "roomWidth" ? "width" : "length"]: false,
        }));
    };

    const handleNext = () => {
        const newErrors = {
            width: !inputs.roomWidth,
            length: !inputs.roomLength,
        };

        setErrors(newErrors);

        const isValid = !newErrors.width && !newErrors.length;

        if (isValid) onNext();
    };

    return (
        <TabLayout
            title="Room Dimensions"
            bottomActions={
                <div className="w-full flex justify-end">
                    <button
                        onClick={handleNext}
                        className="bg-[#0c4a6e] text-white px-6 py-2 font-semibold rounded hover:bg-[#083a56] transition"
                    >
                        NEXT →
                    </button>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Room Width */}
                <div className="w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <label className="font-semibold text-sm">Room Width</label>
                        <select
                            value={inputs.unit}
                            onChange={(e) => handleChange("unit", e.target.value)}
                            className="bg-gray-100 px-2 py-1 rounded text-sm"
                        >
                            <option>Feet</option>
                            <option>Meters</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="number"
                            placeholder="ENTER WIDTH"
                            value={inputs.roomWidth}
                            onChange={(e) => handleChange("roomWidth", e.target.value)}
                            className="border w-full px-3 py-2 text-sm"
                        />
                    </div>
                    {errors.width && (
                        <p className="text-red-600 text-xs mt-1">Room width is required.</p>
                    )}
                </div>

                {/* Room Length */}
                <div className="w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <label className="font-semibold text-sm">Room Length</label>
                        <select
                            value={inputs.unit}
                            onChange={(e) => handleChange("unit", e.target.value)}
                            className="bg-gray-100 px-2 py-1 rounded text-sm"
                        >
                            <option>Feet</option>
                            <option>Meters</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="number"
                            placeholder="ENTER LENGTH"
                            value={inputs.roomLength}
                            onChange={(e) => handleChange("roomLength", e.target.value)}
                            className="border w-full px-3 py-2 text-sm"
                        />
                    </div>
                    {errors.length && (
                        <p className="text-red-600 text-xs mt-1">Room length is required.</p>
                    )}
                </div>
            </div>
        </TabLayout>
    );
};

export default RoomDimensions;
