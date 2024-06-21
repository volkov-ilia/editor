import { SetStateAction } from "react"
import { BaseSelection } from "slate"
import { cloneObject } from "./localStorage/cloneObject"

export const saveCursorPosition = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  setCursorBuffer: { (value: SetStateAction<{}>): void; (arg0: any): void },
  prevCursorPositionRef: any,
  selection: BaseSelection | null,
  locale: string
) => {
  if (prevCursorPositionRef) {
    const newState = cloneObject(prevCursorPositionRef)
    newState[locale] = selection
    setCursorBuffer(newState)
    return newState
  }
}
