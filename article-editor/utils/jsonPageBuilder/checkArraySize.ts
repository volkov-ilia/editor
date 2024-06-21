/* eslint-disable @typescript-eslint/no-explicit-any */
import { WrongArrayLengthMessage } from "./messages"

const checkArrayLength = (componentName: string, arrayName: string, array: any[], expectedLength: number) => {
  const isCorrectLength = array.length === expectedLength
  if (!isCorrectLength) {
    // eslint-disable-next-line no-console
    console.warn(WrongArrayLengthMessage(componentName, arrayName, array.length, expectedLength))
  }
  return isCorrectLength
}

export default checkArrayLength
