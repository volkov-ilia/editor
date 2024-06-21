import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import slateTextHandler from "./nested/slateTextHandler"
import componentJsonGenerator from "../componentJsonGenerator"
import filter from "lodash/filter"
import DESCRIPTION from "../../slate/globalValues/article/nestedTypes/DESCRIPTION"

const textWithGreenLineHandler: NodeHandler = ({ component }) => {
  const type = "TextWithGreenLine"
  const componentName = generateComponentID(type)
  const text = filter(component.children, { type: DESCRIPTION })
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "text",
      value: slateTextHandler(text),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default textWithGreenLineHandler
