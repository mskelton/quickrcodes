import { getCharacterCountBitLength } from "../character-count"

export type EncodingMode = "numeric" | "alphanumeric" | "byte" | "kanji"

export abstract class Encoder {
  protected input: string = ""
  protected encodingMode: EncodingMode
  protected version: number = 0
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

    this.buffer += bitMap[this.encodingMode] + " "
  }

  private encodeCharacterCount() {
    const inputLength = this.input.length.toString(2)
    const bitLength = getCharacterCountBitLength(
      this.encodingMode,
      this.version
    )

    this.buffer += inputLength.padStart(bitLength, "0") + " "
  }

  with(input: string, version: number) {
    this.input = input
    this.version = version
    return this
  }

  encode() {
    this.encodeEncodingMode()
    this.encodeCharacterCount()
    this.encodeInput()

    return this
  }

  toString() {
    return this.buffer
  }
}
