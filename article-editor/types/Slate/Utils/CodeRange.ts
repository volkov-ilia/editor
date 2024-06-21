import { Range } from "slate"

type CodeRange = Range & {
  isCode: boolean
  className?: string
}

export default CodeRange
