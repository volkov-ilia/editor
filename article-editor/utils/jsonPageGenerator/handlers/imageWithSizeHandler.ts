import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import imageHandler from "./nested/imageHandler"
import find from "lodash/find"
import IMAGE from "../../slate/globalValues/article/nestedTypes/IMAGE"
import componentJsonGenerator from "../componentJsonGenerator"

const imageWithSizeHandler: NodeHandler = ({ component }) => {
  const type = "ImageWithSize"
  const componentName = generateComponentID(type)
  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
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

export default imageWithSizeHandler
