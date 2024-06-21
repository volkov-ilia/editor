import { PARAGRAPH } from "../TypesVariables"
import { SlateComponent } from "../../../../types/SlateComponent"

class ChildrenNormalizer {
  textCenter(component: SlateComponent) {
    return {
      ...component,
      type: PARAGRAPH,
      children: [
        {
          ...component.children[0],
          textCenter: true,
        },
      ],
    }
  }
  textRight(component: SlateComponent) {
    return {
      ...component,
      type: PARAGRAPH,
      children: [
        {
          ...component.children[0],
          textRight: true,
        },
      ],
    }
  }
  paragraph(component: SlateComponent) {
    return {
      ...component,
      type: PARAGRAPH,
    }
  }
  description(component: SlateComponent) {
    return {
      ...component,
      type: PARAGRAPH,
    }
  }
  quoteText(component: SlateComponent) {
    return {
      ...component,
      type: PARAGRAPH,
    }
  }
  default(component: SlateComponent) {
    return component
  }
}

export default new ChildrenNormalizer()
