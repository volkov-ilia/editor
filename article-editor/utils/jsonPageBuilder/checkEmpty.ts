/* eslint-disable @typescript-eslint/no-explicit-any */
import isEmpty from "lodash/isEmpty"

const checkEmpty = (value: any) => isEmpty(value) && typeof value !== "number" && typeof value !== "function"

export default checkEmpty
