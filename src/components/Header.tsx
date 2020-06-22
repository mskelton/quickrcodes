/** @jsx jsx */
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"

const Colored = styled.span`
  color: #3f51b5;
`

export function Header() {
  return (
    <header css={{ marginBottom: 32 }}>
      <h1>
        <Colored>Q</Colored>uick<Colored>R</Colored> Codes
      </h1>
    </header>
  )
}
