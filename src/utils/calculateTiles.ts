export function calculateTiles({
  mode = "Floor", // "Wall" | "Floor"
  roomLength,
  roomWidth,
  roomHeight, // (ft) – used only in Wall mode
  unit = "feet",
  tileSize, // e.g., "600x600"
  wastage,
  peicesPerBox,
}) {
  if (!roomLength || !roomWidth || !tileSize) return null;
  if (mode === "Wall" && !roomHeight) return null;

  /* ---------- helpers ---------- */
  const ftToM = (ft: number) => ft * 0.3048;

  /* ---------- default pcs/box map ---------- */
  const tileSizeToBoxMap: Record<string, number> = {
    "1000x1000": 8,
    "600x600": 5,
    "300x600": 12,
  };

  const [tileW, tileH] = tileSize.split("x").map(Number); // mm
  const wastagePct = parseInt(wastage) || 0;
  const piecesPerBoxNum =
    parseInt(peicesPerBox) || tileSizeToBoxMap[tileSize] || 5;

  const isFeet = unit.toLowerCase() === "feet";
  const lenM = isFeet ? ftToM(parseFloat(roomLength)) : parseFloat(roomLength);
  const widM = isFeet ? ftToM(parseFloat(roomWidth)) : parseFloat(roomWidth);

  /* ---------- Area Calculation ---------- */
  let totalAreaM2 = 0;

  if (mode === "Wall") {
    const hgtM = isFeet
      ? ftToM(parseFloat(roomHeight))
      : parseFloat(roomHeight);
    const wallAreaM2 = 2 * (lenM + widM) * hgtM;

    const doorAreaM2 = ftToM(3) * ftToM(7); // 3x7 ft door
    totalAreaM2 = Math.max(0, wallAreaM2 - doorAreaM2);
  } else {
    // Floor mode
    const floorAreaM2 = lenM * widM;

    const doorWidthM = ftToM(3);
    const skirtingLenM = 2 * (lenM + widM) - doorWidthM;

    const skirtingHeightM = ftToM(0.33); // fixed skirting height = 0.33 ft
    const skirtingAreaM2 = skirtingLenM * skirtingHeightM;

    totalAreaM2 = floorAreaM2 + skirtingAreaM2;
  }

  /* ---------- Tile Calculation ---------- */
  const tileAreaM2 = (tileW / 1000) * (tileH / 1000);

  let tilesNeeded = totalAreaM2 / tileAreaM2;
  tilesNeeded += tilesNeeded * (wastagePct / 100);
  tilesNeeded = Math.ceil(tilesNeeded);

  const boxesNeeded = Math.ceil(tilesNeeded / piecesPerBoxNum);

  return {
    tiles: tilesNeeded,
    boxes: boxesNeeded,
  };
}
