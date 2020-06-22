import capacities from "./capacities.json"
import { ErrorCorrectionLevel } from "./error-correction"
import { EncodingMode } from "./mode"

export function detectVersion(
  input: string,
  encodingMode: EncodingMode,
  errorCorrectionLevel: ErrorCorrectionLevel
) {
  const modeIndex = ["numeric", "alphanumeric", "byte", "kanji"].indexOf(
    encodingMode
  )

  for (let i = 0; i < capacities.length; i++) {
    if (input.length <= capacities[i][errorCorrectionLevel][modeIndex]) {
      return i + 1
    }
  }

  throw new Error("Input is greater than maximum allowed length")
}
