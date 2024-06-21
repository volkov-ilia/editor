import forEach from "lodash/forEach"
import { EasterEggsConfigItem } from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"

const count = (array: { [key: string]: EasterEggsConfigItem }) => {
  let sum = 0
  forEach(array, (item) => {
    sum += item.max
  })

  return sum
}

export default count
