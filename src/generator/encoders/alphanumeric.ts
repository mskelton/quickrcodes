import { Encoder } from "./encoder"
import characterList from "./character-list.json"

export class AlphanumericEncoder extends Encoder {
  constructor() {
    super("alphanumeric")
  }

  encodeInput() {
    this.buffer += this.input
      .match(/.{1,2}/g)!
      .map((group) => group.split(""))
      .map(([left, right]) => {
        const a = characterList.indexOf(left)

        if (right !== undefined) {
          const b = characterList.indexOf(right)
          return (a * 45 + b).toString(2).padStart(11, "0")
        }

        return a.toString(2).padStart(6, "0")
      })
      .join("")

    return this
  }
}
