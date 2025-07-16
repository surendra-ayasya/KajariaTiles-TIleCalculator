import React, { useContext, useState } from "react";
import TileInputsContext from "../context/TileInputsContext";
import { calculateTiles } from "../utils/calculateTiles";
import TabLayout from "../components/TabLayout";

const TileSizeStep = ({ onNext, onBack }) => {
    const { inputs, setInputs } = useContext(TileInputsContext);
    const wallMode = inputs.mode === "Wall" || inputs.mode === "wall";
    const [errors, setErrors] = useState({
        tileSize: false,
        peicesPerBox: false,
    });

    const handleChange = (field, value) => {
        setInputs({ ...inputs, [field]: value });
        setErrors({ ...errors, [field]: false });
    };

    const handleCalculate = () => {
        const hasTileSize = !!inputs.tileSize;
        const hasPcs = !!inputs.peicesPerBox;

        setErrors({
            tileSize: !hasTileSize,
            peicesPerBox: !hasPcs,
        });

        if (hasTileSize && hasPcs) {
            const result = calculateTiles(inputs);
            if (result) {
                setInputs({
                    ...inputs,
                    totalTilesNeeded: result.tiles,
                    totalBoxesNeeded: result.boxes,
                    currentStep: 3, // Let your app show 3rd tab based on this
                });
            }
        }
    };

    const tileSizes = ["1000x1000", "600x600", "300x600"];
    const pieceOptions = [2, 5, 8, 12];
    const dropdownOptions = ["00", "02", "03", "05"];

    return (
        <TabLayout
            title="Select Size of Tiles"
            bottomActions={
                <div className="flex justify-end gap-3 items-center">
                    <button
                        onClick={onBack}
                        className="border border-gray-400 text-black px-6 py-2 rounded hover:bg-gray-100 transition"
                    >
                        ← BACK
                    </button>
                    <button
                        onClick={handleCalculate}
                        className="bg-[#0c4a6e] text-white px-6 py-2 font-semibold rounded hover:bg-[#083a56] transition"
                    >
                        CALCULATE NOW →
                    </button>
                </div>
            }
            bottomNote={
                wallMode
                    ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet × 7.0 feet)."
                    : null
            }
        >
            {/* Tile size dropdown */}
            <div className="mb-6">
                <label className="font-semibold text-sm block mb-2">Select Size of Tiles</label>
                <select
                    value={inputs.tileSize}
                    onChange={(e) => handleChange("tileSize", e.target.value)}
                    className="w-full border px-3 py-2 text-sm"
                >
                    <option value="">-- Select --</option>
                    {tileSizes.map((size) => (
                        <option key={size} value={size}>
                            {size.toUpperCase()} MM
                        </option>
                    ))}
                </select>
                {errors.tileSize && (
                    <p className="text-red-600 text-xs mt-1">Please select a tile size.</p>
                )}
            </div>

            {/* Row: Pcs/Box | Wastage | Grout */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 justify-between">
                {/* Pcs/box section */}
                <div className="flex-1 mb-6 lg:mb-0">
                    <label className="font-semibold text-sm block mb-2">
                        Select Pcs/box to see number of boxes required
                        <span className="ml-1 text-gray-400 text-xs">(i)</span>
                    </label>
                    <div className="flex gap-4 flex-wrap">
                        {pieceOptions.map((pcs) => (
                            <label
                                key={pcs}
                                className={`px-4 py-2 border rounded cursor-pointer transition text-sm ${inputs.peicesPerBox === pcs
                                    ? "bg-[#0c4a6e] text-white border-[#0c4a6e]"
                                    : "bg-gray-100 text-black"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="pieces"
                                    value={pcs}
                                    checked={inputs.peicesPerBox === pcs}
                                    onChange={() => handleChange("peicesPerBox", pcs)}
                                    className="hidden"
                                />
                                {pcs} PCS
                            </label>
                        ))}
                    </div>
                    {errors.peicesPerBox && (
                        <p className="text-red-600 text-xs mt-1">Please select Pcs/box.</p>
                    )}
                </div>

                {/* Wastage and Grout */}
                <div className="flex flex-col lg:flex-row gap-6 flex-1">
                    <div className="w-full">
                        <label className="font-semibold text-sm block mb-2">Add Wastage (%)</label>
                        <select
                            value={inputs.wastage}
                            onChange={(e) => handleChange("wastage", e.target.value)}
                            className="w-full border px-3 py-2 text-sm"
                        >
                            {dropdownOptions.map((w) => (
                                <option key={w} value={w}>
                                    {w}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="font-semibold text-sm block mb-2">Grout (mm)</label>
                        <select
                            value={inputs.grout}
                            onChange={(e) => handleChange("grout", e.target.value)}
                            className="w-full border px-3 py-2 text-sm"
                        >
                            {dropdownOptions.map((g) => (
                                <option key={g} value={g}>
                                    {g}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </TabLayout>
    );
};

export default TileSizeStep;
