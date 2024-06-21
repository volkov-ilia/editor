import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"
import find from "lodash/find"
import SELECTOR from "../../slate/globalValues/article/nestedTypes/SELECTOR"
import CODE_ITEM from "../../slate/globalValues/article/nestedTypes/CODE_ITEM"
import filter from "lodash/filter"
import join from "lodash/join"
import map from "lodash/map"
import getTextFromChild from "../getTextFromChild"

const codeHandler: NodeHandler = ({ component }) => {
  const type = "Code"
  const componentName = generateComponentID(type)
  const codeItemsChild = filter(component.children, { type: CODE_ITEM })
  const code = join(
    map(codeItemsChild, (codeLine) => getTextFromChild(codeLine)),
    "\n"
  )
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "language",
      value: getTextFromChild(find(component.children, { type: SELECTOR })),
      function: IDENTITY,
    },
    { name: "code", value: code, function: IDENTITY },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default codeHandler
