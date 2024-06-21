export type JsonStyledText = {
  type: string
  text: string | StyledText[]
  styles?: string[]
  [key: string]: string | (string | StyledText)[] | undefined
}
export type JsonFewText = { text: StyledText[] }

type StyledText = string | JsonStyledText | JsonFewText

export default StyledText
