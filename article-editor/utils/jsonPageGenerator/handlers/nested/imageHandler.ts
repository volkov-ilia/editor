import { NestedNodeHandler } from "../../../../types/utils/jsonPageGenerator/NodeHandler"
import nestedHandlerNameBuilder from "../../nestedHandlerNameBuilder"
import get from "lodash/get"
import find from "lodash/find"
import forEach from "lodash/forEach"
import IStringJson from "../../../../types/utils/contentful/IStringJson"
import IMAGE_DESCRIPTION from "../../../slate/globalValues/article/nestedTypes/IMAGE_DESCRIPTION"
import DESCRIPTION from "../../../slate/globalValues/article/nestedTypes/DESCRIPTION"
import HEIGHT from "../../../slate/globalValues/article/nestedTypes/HEIGHT"
import ALT from "../../../slate/globalValues/article/nestedTypes/ALT"

const imageHandler: NestedNodeHandler = ({ component, parentComponentName }) => {
  const type = "ImageCarouselItem"
  const componentName = nestedHandlerNameBuilder(parentComponentName, type)
  const fields: IStringJson = {}
  const temp = {
    src: get(component, "url"),
    alt: get(find(component.children, { type: ALT }), "children[0].text"),
    width: get(find(component.children, { type: "width" }), "children[0].text"),
    height: get(find(component.children, { type: HEIGHT }), "children[0].text"),
    description: get(
      find(component.children, { type: DESCRIPTION }) || find(component.children, { type: IMAGE_DESCRIPTION }),
      "children[0].text"
    ),
  }
  forEach(temp, (value, name) => {
    if (value) fields[name] = value
  })
  return fields
}

export default imageHandler
