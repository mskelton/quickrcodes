import { EncodingMode } from "./mode"

const bitLengthMap: Record<
  "Small" | "Medium" | "Large",
  Record<EncodingMode, number>
> = {
  Small: {
    numeric: 10,
    alphanumeric: 9,
    byte: 8,
    kanji: 8,
  },
  Medium: {
    numeric: 12,
    alphanumeric: 11,
    byte: 16,
    kanji: 10,
  },
  Large: {
    numeric: 14,
    alphanumeric: 13,
    byte: 16,
    kanji: 12,
  },
}

function getBitLength(encodingMode: EncodingMode, version: number) {
  return version < 10
    ? bitLengthMap.Small[encodingMode]
    : version < 27
    ? bitLengthMap.Medium[encodingMode]
    : bitLengthMap.Large[encodingMode]
}

export function encodeCharacterCount(
  input: string,
  encodingMode: EncodingMode,
  version: number
) {
  return input.length
    .toString(2)
    .padStart(getBitLength(encodingMode, version), "0")
}
