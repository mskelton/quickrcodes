import { EncodingMode } from "./encoder"
import { NumericEncoder } from "./numeric"

export function createEncoder(encodingMode: EncodingMode) {
  switch (encodingMode) {
    case "numeric":
      return new NumericEncoder()

    case "alphanumeric":
      return new NumericEncoder()

    case "byte":
      return new NumericEncoder()

    case "kanji":
      throw new Error("Not implemented yet.")
  }
}
