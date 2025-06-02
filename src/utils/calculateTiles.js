export function calculateTiles({
  roomLength,
  roomWidth,
  unit,
  tileSize,
  grout,
  wastage,
  peicesPerBox
}) {
  if (!roomLength || !roomWidth || !tileSize || !peicesPerBox) return null;

  const [tileW, tileH] = tileSize.split("x").map(Number);
  const groutMM = parseInt(grout) || 0;
  const wastagePct = parseInt(wastage) || 0;

  // Convert room to meters
  let lengthM = parseFloat(roomLength);
  let widthM = parseFloat(roomWidth);
  if (unit.toLowerCase() === "feet") {
    lengthM *= 0.3048;
    widthM *= 0.3048;
  }

  const roomAreaM2 = lengthM * widthM;

  // Convert tile area to meters² with grout
  const tileAreaM2 = ((tileW + groutMM) / 1000) * ((tileH + groutMM) / 1000);

  let tilesNeeded = roomAreaM2 / tileAreaM2;
  tilesNeeded += tilesNeeded * (wastagePct / 100); // Add wastage
  tilesNeeded = Math.ceil(tilesNeeded);

  const boxesNeeded = Math.ceil(tilesNeeded / peicesPerBox);

  return {
    tiles: tilesNeeded,
    boxes: boxesNeeded,
  };
}
