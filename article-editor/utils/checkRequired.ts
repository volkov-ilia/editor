/* eslint-disable @typescript-eslint/no-explicit-any */
import forEach from "lodash/forEach"
import get from "lodash/get"

const check = (map: { [key: string]: any }, fields: string[]) => {
  let res = true
  forEach(fields, (field) => {
    if (!get(map, field)) {
      res = false
      return false
    }
  })
  return res
}

export default check
