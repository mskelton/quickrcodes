import { Encoder } from "./encoder"

const getBitLength = (group: string) =>
  group.startsWith("00") ? 4 : group.startsWith("0") ? 7 : 10

export class NumericEncoder extends Encoder {
  constructor() {
    super("numeric")
  }

  encodeInput() {
    this.buffer += this.input
      .match(/.{1,3}/g)!
      .map((group) => group.padStart(3, "0"))
      .map((group) => (+group).toString(2).padStart(getBitLength(group), "0"))
      .join("")

    return this
  }
}
