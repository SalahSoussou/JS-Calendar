function drawStar(ctx, x, y, size, hue) {
  //   const top = y - size / 2,
  //     left = x - size / 2,
  const outerRadius = size / 2,
    innerRadius = outerRadius / 2,
    pointCount = 10;
  //   ctx.strokeRect(top, left, size, size);
  ctx.beginPath();
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * 2,
      radius = i % 2 == 0 ? outerRadius : innerRadius,
      surfaceX = x + Math.sin(angle) * radius,
      surfaceY = y - Math.cos(angle) * radius;
    ctx.lineTo(surfaceX, surfaceY);
  }
  ctx.fillStyle = `hsl(${hue},100%,50%)`;
  ctx.fill();
}
