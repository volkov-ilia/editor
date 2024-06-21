import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import generateComponentID from "../generateComponentID"
import filter from "lodash/filter"
import ChildrenHandlerReturnType from "../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import compact from "lodash/compact"
import map from "lodash/map"
import imageHandler from "./nested/imageHandler"
import isEmpty from "lodash/isEmpty"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import CONTAINER from "../rulesBuilder/functionsRules/functionsNames/CONTAINER"
import componentJsonGenerator from "../componentJsonGenerator"
import slateTextHandler from "./nested/slateTextHandler"
import IMAGE from "../../slate/globalValues/article/nestedTypes/IMAGE"
import DESCRIPTION from "../../slate/globalValues/article/nestedTypes/DESCRIPTION"

const twoImagesWithTextHandler: NodeHandler = ({ component }) => {
  const type = "TwoImagesWithText"
  const componentName = generateComponentID(type)
  const items = filter(component.children, (o) => {
    return o.type === IMAGE
  })
  const imagesFields: ChildrenHandlerReturnType[] = compact(
    map(items, (image) => {
      const itemFields = imageHandler({
        component: image,
        parentComponentName: componentName,
      })

      if (!isEmpty(itemFields)) return itemFields
    })
  )

  const fields: ValueMeta[] = [
    { name: "id", value: componentName, function: IDENTITY },
    {
      name: "images",
      value: {
        meta: [
          { name: "src", function: IDENTITY },
          { name: "alt", function: IDENTITY },
          { name: "width", function: IDENTITY },
          { name: "height", function: IDENTITY },
          { name: "description", function: IDENTITY },
        ],
        values: imagesFields,
      },
      function: CONTAINER,
    },
    {
      name: "text",
      value: slateTextHandler(filter(component.children, { type: DESCRIPTION })),
      function: IDENTITY,
    },
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default twoImagesWithTextHandler
