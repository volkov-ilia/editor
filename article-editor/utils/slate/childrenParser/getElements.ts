/* eslint-disable @typescript-eslint/no-explicit-any */
import filter from "lodash/filter"
import get from "lodash/get"

export const getElements = (children: any, type: string) =>
  filter(children, (c) => get(c, "props.element.type") === type || get(c, "props.text.type") === type)

export default getElements
