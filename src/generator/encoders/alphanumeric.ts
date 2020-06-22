import { Encoder } from "./encoder"

export class AlphanumericEncoder extends Encoder {
  constructor() {
    super("alphanumeric")
  }

  encodeInput() {
    return this
  }
}
