import every from "lodash/every"
import get from "lodash/get"
import checkIsEmptyString from "../checkIsEmpty"

// eslint-disable-next-line @typescript-eslint/ban-types
const isElementEmpty = (element: {}) => every(get(element, "children"), (child) => checkIsEmptyString(child.text))

export default isElementEmpty
