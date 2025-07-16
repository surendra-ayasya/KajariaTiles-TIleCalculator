import React, { useContext, useState } from "react";
import TabLayout from "../components/TabLayout";
import TileInputsContext from "../context/TileInputsContext";

const RoomDimensions = ({ onNext }) => {
  const { inputs, setInputs } = useContext(TileInputsContext);
  const [errors, setErrors] = useState({
    width: false,
    length: false,
    extra: false,
  });

  /* ---------- helpers ---------- */
  const handleChange = (field, value) => {
    setInputs({ ...inputs, [field]: value });

    /* map the changed field to the correct errors key */
    const errorKey =
      field === "roomWidth"
        ? "width"
        : field === "roomLength"
          ? "length"
          : "extra";          // covers roomHeight & skirtingHeight

    setErrors((prev) => ({ ...prev, [errorKey]: false }));
  };


const handleNext = () => {
  const newErrors = {
    width: inputs.roomWidth === "",
    length: inputs.roomLength === "",
    extra:
      inputs.mode === "Wall"
        ? inputs.roomHeight === ""
        : inputs.skirtingHeight === "",
  };

  setErrors(newErrors);

  const isValid = !newErrors.width && !newErrors.length && !newErrors.extra;
  if (isValid) onNext();
};


  /* ---------- mode & labels ---------- */
  const wallMode = inputs.mode === "Wall" || inputs.mode === "wall";
  const widthLbl = wallMode ? "Room Width" : "Floor Width";
  const lengthLbl = wallMode ? "Room Length" : "Floor Length";
  const extraLbl = wallMode ? "Room Height" : "Skirting Height";

  return (
    <TabLayout
      title={wallMode ? "Room Dimensions" : "Floor Dimensions"}
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
      bottomNote={
        wallMode
          ? "The tile quantity is an approximate estimate based on standard assumptions (e.g., standard door size: 3.0 feet × 7.0 feet)."
          : null
      }
    >
      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
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


        <div className="w-full">
          {/* label + unit selector */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <label className="font-semibold text-sm">{extraLbl}</label>
            <select
              value={inputs.unit}
              onChange={(e) => handleChange("unit", e.target.value)}
              className="bg-gray-100 px-2 py-1 rounded-2xl text-sm"
            >
              <option>Feet</option>
              <option>Meters</option>
            </select>
          </div>

          {/* numeric input */}
          <input
            type="number"
            placeholder={`ENTER ${extraLbl.toUpperCase()}`}
            value={wallMode ? inputs.roomHeight : inputs.skirtingHeight}
            onChange={(e) =>
              handleChange(
                wallMode ? "roomHeight" : "skirtingHeight",
                e.target.value
              )
            }
            className="border w-full px-3 py-2 text-sm mt-2"
          />

          {errors.extra && (
            <p className="text-red-600 text-xs mt-1">
              {extraLbl} is required.
            </p>
          )}
        </div>
      </div>
    </TabLayout>
  );
};

export default RoomDimensions;
