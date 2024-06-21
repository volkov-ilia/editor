import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import slateTextHandler from "./nested/slateTextHandler"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"
import generateComponentID from "../generateComponentID"

const articleTextHandler: NodeHandler = ({ component }) => {
  const type = "ArticleText"
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "text",
      value: slateTextHandler(component.children),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default articleTextHandler
