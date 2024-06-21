import { FormattedTextHandler } from "../../../../../types/utils/jsonPageGenerator/NodeHandler"
import camelCase from "lodash/camelCase"
import get from "lodash/get"
import { Descendant } from "slate"

const headersHandler: FormattedTextHandler = ({ component }) => {
  const children = component.children as Descendant[]
  const type = camelCase(component.type)
  const processedHeaderText = get(children, "[0].text") as string
  return {
    type,
    text: processedHeaderText,
  }
}

export default headersHandler
