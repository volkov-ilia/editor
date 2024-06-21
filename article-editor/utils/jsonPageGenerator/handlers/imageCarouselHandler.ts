import { NodeHandler } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import { ValueMeta } from "../../../types/utils/jsonPageGenerator/RulesTypes"
import IDENTITY from "../rulesBuilder/functionsRules/functionsNames/IDENTITY"
import componentJsonGenerator from "../componentJsonGenerator"
import CONTAINER from "../rulesBuilder/functionsRules/functionsNames/CONTAINER"
import imageHandler from "./nested/imageHandler"
import map from "lodash/map"
import ChildrenHandlerReturnType from "../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import compact from "lodash/compact"
import filter from "lodash/filter"
import IMAGE_CAROUSEL_ITEM from "../../slate/globalValues/article/nestedTypes/IMAGE_CAROUSEL_ITEM"
import isEmpty from "lodash/isEmpty"
import generateComponentID from "../generateComponentID"

const imageCarouselHandler: NodeHandler = ({ component }) => {
  const type = "ImageCarousel"
  const componentName = generateComponentID(type)
  const items = filter(component.children, (o) => {
    return o.type === IMAGE_CAROUSEL_ITEM
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
  ]

  return componentJsonGenerator(componentName, type, fields)
}

export default imageCarouselHandler
