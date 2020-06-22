import { EncodingMode } from "./encoders/encoder"

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

export function getCharacterCountBitLength(
  encodingMode: EncodingMode,
  version: number
) {
  return version < 10
    ? bitLengthMap.Small[encodingMode]
    : version < 27
    ? bitLengthMap.Medium[encodingMode]
    : bitLengthMap.Large[encodingMode]
}
