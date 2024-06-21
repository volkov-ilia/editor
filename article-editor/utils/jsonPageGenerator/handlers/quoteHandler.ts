import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import slateTextHandler from "./nested/slateTextHandler"
import componentJsonGenerator from "../componentJsonGenerator"
import filter from "lodash/filter"
import QUOTE_TEXT from "../../slate/globalValues/article/nestedTypes/QUOTE_TEXT"
import find from "lodash/find"
import SIGNATURE from "../../slate/globalValues/article/nestedTypes/SIGNATURE"
import getTextFromChild from "../getTextFromChild"

const quoteHandler: NodeHandler = ({ component }) => {
  const type = "Quote"
  const componentName = generateComponentID(type)
  const quote = filter(component.children, { type: QUOTE_TEXT })
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "quote",
      value: slateTextHandler(quote),
      function: IDENTITY,
    },
    {
      name: "signature",
      value: getTextFromChild(find(component.children, { type: SIGNATURE })),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default quoteHandler
