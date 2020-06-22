import { detectEncodingMode, encodeEncodingMode } from "./mode"
import { detectVersion } from "./versions"
import { ErrorCorrectionLevel } from "./error-correction"
import { encodeCharacterCount } from "./character-count"

export function generateQRCode(
  value: string,
  errorCorrectionLevel: ErrorCorrectionLevel = "L"
) {
  const encodingMode = detectEncodingMode(value)
  const version = detectVersion(value, errorCorrectionLevel)

  let buffer = ""
  buffer += encodeEncodingMode(encodingMode) + " "
  buffer += encodeCharacterCount(value, encodingMode, version)

  return buffer
}
