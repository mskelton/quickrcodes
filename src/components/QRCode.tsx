/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const canvasStyle = css`
  height: 300px;
  width: 300px;
`;

type Props = {
  value: string;
};

export function QRCode({ value }: Props) {
  return <canvas css={canvasStyle}></canvas>;
}
