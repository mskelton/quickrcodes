import { createEncoder } from "./encoders/create-encoder"
import { EncodingMode } from "./encoders/encoder"
import { ErrorCorrectionLevel } from "./error-correction"
import { detectVersion } from "./versions"

function detectEncodingMode(input: string): EncodingMode {
  return /^\d+$/.test(input)
    ? "numeric"
    : /^(\d|[A-z]|[$%*+-./: ])+$/.test(input)
    ? "alphanumeric"
    : "byte"
}

export function generateQRCode(
  input: string,
  errorCorrectionLevel: ErrorCorrectionLevel = "L"
) {
  const encodingMode = detectEncodingMode(input)

  return createEncoder(encodingMode)
    .with(input, detectVersion(input, encodingMode, errorCorrectionLevel))
    .encode()
    .toString()
}