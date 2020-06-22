import { detectEncodingMode, encodeEncodingMode } from "./mode"
import { detectVersion } from "./versions"
import { ErrorCorrectionLevel } from "./error-correction"
import { encodeCharacterCount } from "./character-count"

export function generateQRCode(
  input: string,
  errorCorrectionLevel: ErrorCorrectionLevel = "L"
) {
  const encodingMode = detectEncodingMode(input)
  const version = detectVersion(input, encodingMode, errorCorrectionLevel)

  let buffer = ""
  buffer += encodeEncodingMode(encodingMode) + " "
  buffer += encodeCharacterCount(input, encodingMode, version)

  return buffer
}
