export function drawQRCode(
  buffer: string,
  ctx: CanvasRenderingContext2D,
  canvasSize: number
) {
  console.log(buffer.match(/.{1,8}/g)!.join(" "))
  ctx.fillRect(10, 10, 150, 100)
}
