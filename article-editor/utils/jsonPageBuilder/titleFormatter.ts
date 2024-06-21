import forEach from "lodash/forEach"

export const removeSpaceOnStartAndEnd = (string: string) => {
  if (string) {
    const match = string.match(/(\S+(\s*\S+)*)/)
    return match ? match[0] : string
  }
}

export const titleFormatterToThreeParts = (title: string, firstEnd: number, secondEnd: number) => {
  const maxSizes = [19, 21, 23]
  const maxSizesWarn = (maxSize: number, lineIdx: number) =>
    `[Title formatter] Title line #${lineIdx + 1} should't be longer than ${maxSize} chars `
  let newTitle = removeSpaceOnStartAndEnd(title)

  const result: string[] = []
  if (newTitle) {
    const splits = [firstEnd || newTitle.length, secondEnd || newTitle.length]
    splits.some((split) => {
      if (newTitle) {
        const line = removeSpaceOnStartAndEnd(newTitle.substring(0, split))
        if (line) {
          result.push(line)
          newTitle = removeSpaceOnStartAndEnd(newTitle.substring(split))
        }
      } else return 0
      return 0
    })

    if (newTitle) result.push(newTitle)

    forEach(maxSizes, (size, idx) => {
      // eslint-disable-next-line no-console
      if (result[idx]) if (result[idx].length > size + 1) console.warn(maxSizesWarn(size, idx))
    })
  }

  return result
}
