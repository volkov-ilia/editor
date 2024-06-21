import filter from "lodash/filter"
import { Descendant } from "slate"

export const textFormats = ["bold", "italic", "underline", "strike", "textCenter", "textRight"]

const textFormatsHandler: (component: Descendant) => string[] = (component) => {
  return filter(textFormats, (format) => {
    if (component[format]) {
      return format
    }
  }) as string[]
}

export default textFormatsHandler
