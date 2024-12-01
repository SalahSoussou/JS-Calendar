const cellSize = 200,
  drawItemFunction = [];
drawItemFunction[1] = drawStar;
for (let day = 1; day <= 24; day++) {
  const cnv = document.createElement("canvas");
  cnv.width = cellSize;
  cnv.height = cellSize;
  document.body.append(cnv);
  fillCell(day, cnv);
}

function fillCell(index, cnv) {
  const ctx = cnv.getContext("2d"),
    x = cnv.width / 2,
    y = cnv.height / 2,
    itemSize = cnv.width * 0.6,
    drawItem = drawItemFunction[index],
    hue = Math.random() * 360;

  drawItem
    ? drawItem(ctx, x, y, itemSize, hue)
    : drawNumber(ctx, index, x, y, itemSize);
}

function drawNumber(ctx, value, x, y, size) {
  ctx.font = size + "px Consolas";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(value, x, y);
}
