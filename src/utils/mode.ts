export type EncodingMode = "numeric" | "alphanumeric" | "byte" | "kanji"

export function detectEncodingMode(value: string): EncodingMode {
  return /^\d+$/.test(value)
    ? "numeric"
    : /^(\d|[A-z]|[$%*+-./: ])+$/.test(value)
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
