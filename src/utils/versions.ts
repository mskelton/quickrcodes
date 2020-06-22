import { ErrorCorrectionLevel } from "./error-correction"
import { EncodingMode } from "./mode"

type Capacities = {
  [level in ErrorCorrectionLevel]?: {
    [mode in EncodingMode]?: number
  }
}

const capacities: Capacities = {
  L: {
    numeric: 41,
    alphanumeric: 25,
    byte: 17,
  },
}

export function detectVersion(
  value: string,
  errorCorrectionLevel: ErrorCorrectionLevel
) {
  return 40
}
