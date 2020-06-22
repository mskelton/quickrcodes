import { Encoder } from "./encoder"

export class ByteEncoder extends Encoder {
  constructor() {
    super("byte")
  }

  encodeInput() {
    return this
  }
}
