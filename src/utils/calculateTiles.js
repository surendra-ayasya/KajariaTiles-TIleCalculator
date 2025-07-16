// Updated to support both ‟Wall” and ‟Floor” modes + skirting + door deduction
export function calculateTiles({
  mode = "Floor", // "Wall" | "Floor"
  roomLength,
  roomWidth,
  roomHeight, // (ft) – used only when mode === "Wall"
  skirtingHeight, // (in) – used only when mode === "Floor"
  unit,
  tileSize,
  grout,
  wastage,
  peicesPerBox,
}) {
  if (!roomLength || !roomWidth || !tileSize || !peicesPerBox) return null;
  if (mode === "Wall" && !roomHeight) return null;
  if (mode === "Floor" && !skirtingHeight) return null;

  /* ---------- helpers ---------- */
  const ftToM = (ft) => parseFloat(ft) * 0.3048;
  const inToM = (inch) => parseFloat(inch) * 0.0254;

  /* ---------- input parsing ---------- */
  const [tileW, tileH] = tileSize.split("x").map(Number); // in mm
  const groutMM = parseInt(grout) || 0;
  const wastagePct = parseInt(wastage) || 0;
  const piecesPerBoxNum = parseInt(peicesPerBox);

  const lenM =
    unit.toLowerCase() === "feet" ? ftToM(roomLength) : parseFloat(roomLength);
  const widM =
    unit.toLowerCase() === "feet" ? ftToM(roomWidth) : parseFloat(roomWidth);

  /* ---------- area calculations ---------- */
  let totalAreaM2 = 0;

  if (mode === "Wall") {
    const hgtM =
      unit.toLowerCase() === "feet"
        ? ftToM(roomHeight)
        : parseFloat(roomHeight);
    const wallAreaM2 = 2 * (lenM + widM) * hgtM;

    const doorAreaM2 = ftToM(3) * ftToM(7);

    totalAreaM2 = Math.max(0, wallAreaM2 - doorAreaM2); // safeguard against negatives
  } else {
    // Floor mode
    const floorAreaM2 = lenM * widM;

    const doorWidthM = ftToM(3); 
    const skirtingLenM = 2 * (lenM + widM) - doorWidthM;

    // --- updated skirting height conversion ---
    let skirtingHeightM;
    if (unit.toLowerCase() === "feet") {
      skirtingHeightM = parseFloat(skirtingHeight) * 0.3048; // ft → m
    } else {
      skirtingHeightM = parseFloat(skirtingHeight); // already m
    }
    // -------------------------------------------

    const skirtingAreaM2 = skirtingLenM * skirtingHeightM;

    totalAreaM2 = floorAreaM2 + skirtingAreaM2;
  }

  /* ---------- tile maths ---------- */
  const tileAreaM2 = ((tileW + groutMM) / 1000) * ((tileH + groutMM) / 1000);

  let tilesNeeded = totalAreaM2 / tileAreaM2;
  tilesNeeded += tilesNeeded * (wastagePct / 100); // wastage allowance
  tilesNeeded = Math.ceil(tilesNeeded);

  const boxesNeeded = Math.ceil(tilesNeeded / piecesPerBoxNum);

  return {
    tiles: tilesNeeded,
    boxes: boxesNeeded,
  };
}
