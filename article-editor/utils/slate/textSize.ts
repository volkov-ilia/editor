import reduce from "lodash/reduce"
import get from "lodash/get"
import size from "lodash/size"
import ZWSP from "./globalValues/ZWSP"

const stringSize = (string: string) => (string === ZWSP ? 0 : size(string))

// eslint-disable-next-line @typescript-eslint/ban-types
const textSize = (element: {}) => reduce(get(element, "children"), (size, n) => size + stringSize(n.text), 0)

export default textSize
