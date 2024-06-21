export const checkStringSize = (string: string, minSize = 4, maxSize = 160) => {
  if (string.length < minSize || string.length > maxSize)
    console.warn(`Wrong length of ${string} which is ${string.length}. Should be between ${minSize} and ${maxSize}`)
  return string
}

export const checkStringNotUndefined = (string: string, fieldName: string) => {
  if (string === undefined) console.warn(`${fieldName} field should be not empty.`)
  return string
}
