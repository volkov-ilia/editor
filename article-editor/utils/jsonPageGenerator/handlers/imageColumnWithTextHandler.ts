import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import filter from "lodash/filter"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import slateTextHandler from "./nested/slateTextHandler"
import componentJsonGenerator from "../componentJsonGenerator"
import imageHandler from "./nested/imageHandler"
import find from "lodash/find"
import IMAGE from "../../slate/globalValues/article/nestedTypes/IMAGE"
import PARAGRAPH from "../../slate/globalValues/article/nestedTypes/PARAGRAPH"

const imageColumnWithTextHandler: NodeHandler = ({ component }) => {
  const type = "ImageColumnWithText"
  const componentName = generateComponentID(type)
  const text = filter(component.children, { type: PARAGRAPH })
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    { name: "text", value: slateTextHandler(text), function: IDENTITY },
    {
      name: "image",
      value: imageHandler({
        component: find(component.children, { type: IMAGE }),
        parentComponentName: componentName,
      }),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default imageColumnWithTextHandler
