import React, { useContext, useEffect, useState } from "react";
import TabLayout from "../components/TabLayout";
import TileInputsContext from "../context/TileInputsContext";

const RoomDimensions = ({ onNext }) => {
  const { inputs, setInputs } = useContext(TileInputsContext);
  const [errors, setErrors] = useState({
    width: false,
    length: false,
    extra: false,
  });

  const wallMode = inputs.mode?.toLowerCase() === "wall";
  const widthLbl = wallMode ? "Room Width" : "Floor Width";
  const lengthLbl = wallMode ? "Room Length" : "Floor Length";

  useEffect(() => {
    if (!wallMode) {
      setInputs((prev) => ({
        ...prev,
        skirtingHeight: "0.33", // fixed skirting height for floor mode
      }));
    }
  }, [wallMode, setInputs]);

  const handleChange = (field, value) => {
    setInputs({ ...inputs, [field]: value });

    const errorKey =
      field === "roomWidth"
        ? "width"
        : field === "roomLength"
        ? "length"
        : "extra";

    setErrors((prev) => ({ ...prev, [errorKey]: false }));
  };

  const handleNext = () => {
    const newErrors = {
      width: inputs.roomWidth === "",
      length: inputs.roomLength === "",
      extra: wallMode ? inputs.roomHeight === "" : false,
    };

    setErrors(newErrors);

    const isValid = !newErrors.width && !newErrors.length && !newErrors.extra;
    if (isValid) onNext();
  };

  const bottomNoteText = wallMode
    ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet x 7.0 feet) and includes an additional 10% to account for wastage during cutting and installation."
    : "The tile quantity is an approximate estimate based on standard assumptions (e.g., floor skirting height: 0.33 feet) and includes an additional 10% to account for wastage during cutting and installation.";

  return (
    <TabLayout
      title={wallMode ? "Room Dimensions" : "Floor Dimensions"}
      bottomNote={bottomNoteText}
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
      <div
        className={`grid gap-6 w-full ${
          wallMode ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"
        }`}
      >
        {/* Width */}
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="font-semibold text-sm">{widthLbl}</label>
            <select
              value={inputs.unit}
              onChange={(e) => handleChange("unit", e.target.value)}
              className="bg-gray-100 px-2 py-1 rounded-2xl text-sm"
            >
              <option>Feet</option>
              <option>Meters</option>
            </select>
          </div>
          <input
            type="number"
            placeholder={`ENTER ${widthLbl.toUpperCase()}`}
            value={inputs.roomWidth}
            onChange={(e) => handleChange("roomWidth", e.target.value)}
            className="border w-full px-3 py-2 text-sm mt-2"
          />
          {errors.width && (
            <p className="text-red-600 text-xs mt-1">{widthLbl} is required.</p>
          )}
        </div>

        {/* Length */}
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="font-semibold text-sm">{lengthLbl}</label>
            <select
              value={inputs.unit}
              onChange={(e) => handleChange("unit", e.target.value)}
              className="bg-gray-100 px-2 py-1 rounded-2xl text-sm"
            >
              <option>Feet</option>
              <option>Meters</option>
            </select>
          </div>
          <input
            type="number"
            placeholder={`ENTER ${lengthLbl.toUpperCase()}`}
            value={inputs.roomLength}
            onChange={(e) => handleChange("roomLength", e.target.value)}
            className="border w-full px-3 py-2 text-sm mt-2"
          />
          {errors.length && (
            <p className="text-red-600 text-xs mt-1">{lengthLbl} is required.</p>
          )}
        </div>

        {/* Height (only for Wall Mode) */}
        {wallMode && (
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="font-semibold text-sm">Room Height</label>
              <select
                value={inputs.unit}
                onChange={(e) => handleChange("unit", e.target.value)}
                className="bg-gray-100 px-2 py-1 rounded-2xl text-sm"
              >
                <option>Feet</option>
                <option>Meters</option>
              </select>
            </div>
            <input
              type="number"
              placeholder="ENTER ROOM HEIGHT"
              value={inputs.roomHeight}
              onChange={(e) => handleChange("roomHeight", e.target.value)}
              className="border w-full px-3 py-2 text-sm mt-2"
            />
            {errors.extra && (
              <p className="text-red-600 text-xs mt-1">
                Room Height is required.
              </p>
            )}
          </div>
        )}
      </div>
    </TabLayout>
  );
};

export default RoomDimensions;
