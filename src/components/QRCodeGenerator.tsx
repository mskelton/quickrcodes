/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState } from "react"
import { QRCode } from "./QRCode"

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const inputStyle = css`
  margin-bottom: 32px;
  width: 100%;
`

export function QRCodeGenerator() {
  const [value, setValue] = useState("HELLO WORLD")
  // const [value, setValue] = useState("1234")

  return (
    <div css={wrapperStyle}>
      <input
        className="form-control"
        // css={inputStyle}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus={true}
        type="text"
      />

      <QRCode value={value} />
    </div>
  )
}
