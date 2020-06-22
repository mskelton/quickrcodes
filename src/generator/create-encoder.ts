import { AlphanumericEncoder } from "./encoders/alphanumeric"
import { ByteEncoder } from "./encoders/byte"
import { EncodingMode } from "./encoders/encoder"
import { NumericEncoder } from "./encoders/numeric"

export function createEncoder(encodingMode: EncodingMode) {
  switch (encodingMode) {
    case "numeric":
      return new NumericEncoder()

    case "alphanumeric":
      return new AlphanumericEncoder()

    case "byte":
      return new ByteEncoder()

    case "kanji":
      throw new Error("Not implemented yet.")
  }
}
