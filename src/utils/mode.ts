export type EncodingMode = "numeric" | "alphanumeric" | "byte" | "kanji"

export function detectEncodingMode(input: string): EncodingMode {
  return /^\d+$/.test(input)
    ? "numeric"
    : /^(\d|[A-z]|[$%*+-./: ])+$/.test(input)
    ? "alphanumeric"
    : "byte"
}

export function encodeEncodingMode(encodingMode: EncodingMode) {
  return {
    numeric: "0001",
    alphanumeric: "0010",
    byte: "0100",
    kanji: "1000",
  }[encodingMode]
}
