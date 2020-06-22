import { getCharacterCountBitLength } from "../character-count"
import { ErrorCorrectionLevel } from "../error-correction"
import totalBitsMap from "./total-bits.json"

export type EncodingMode = "numeric" | "alphanumeric" | "byte" | "kanji"

export abstract class Encoder {
  protected input: string = ""
  protected encodingMode: EncodingMode
  protected version: number = 0
  protected errorCorrectionLevel: ErrorCorrectionLevel = "L"
  protected buffer: string = ""
  protected abstract encodeInput(): this

  constructor(encodingMode: EncodingMode) {
    this.encodingMode = encodingMode
  }

  private encodeEncodingMode() {
    const bitMap = {
      numeric: "0001",
      alphanumeric: "0010",
      byte: "0100",
      kanji: "1000",
    }

    this.buffer += bitMap[this.encodingMode]
  }

  private encodeCharacterCount() {
    const inputLength = this.input.length.toString(2)
    const bitLength = getCharacterCountBitLength(
      this.encodingMode,
      this.version
    )

    this.buffer += inputLength.padStart(bitLength, "0")
  }

  private getTotalBits() {
    const key = `${this.version}-${this.errorCorrectionLevel}`
    const value = (totalBitsMap as Record<string, number>)[key]

    return value * 8
  }

  private padBytes() {
    const totalBits = this.getTotalBits()

    // First, pad the buffer with the terminator
    if (this.buffer.length < totalBits) {
      this.buffer += "0".repeat(Math.min(totalBits - this.buffer.length, 4))
    }

    // Next, add additional zeros to make the buffer divisible by 8
    this.buffer += "0".repeat(8 - (this.buffer.length % 8))

    // Finally, add the pad bytes until the buffer is the correct size.
    while (this.buffer.length < totalBits) {
      this.buffer += this.buffer.endsWith("11101100") ? "00010001" : "11101100"
    }
  }

  with(
    input: string,
    version: number,
    errorCorrectionLevel: ErrorCorrectionLevel
  ) {
    this.input = input
    this.version = version
    this.errorCorrectionLevel = errorCorrectionLevel

    return this
  }

  encode() {
    this.encodeEncodingMode()
    this.encodeCharacterCount()
    this.encodeInput()
    this.padBytes()

    return this
  }

  toString() {
    return this.buffer
  }
}
