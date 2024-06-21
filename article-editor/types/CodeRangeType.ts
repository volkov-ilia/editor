import { Range } from "slate"

type CodeRangeType = Range & {
  isCode: boolean
  className: string
}

export default CodeRangeType
