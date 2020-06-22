/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useEffect, useRef } from "react"
import { drawQRCode } from "../generator/draw-code"
import { generateQRCode } from "../generator/generate"

const canvasSize = 300

type Props = {
  value: string
}

export function QRCode({ value }: Props) {
  const ref = useRef<HTMLCanvasElement>(null!)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext("2d")!

    ctx.fillStyle = "black"
    ctx.clearRect(0, 0, canvasSize, canvasSize)

    drawQRCode(generateQRCode(value), ctx, canvasSize)
  }, [value])

  return (
    <canvas
      ref={ref}
      css={css`
        height: ${canvasSize}px;
        width: ${canvasSize}px;
      `}
    />
  )
}
