import { get, filter } from "lodash"
import { LINK } from "../../TypesVariables"
import Contentful from "../../../../../types/Contentful"
import textFormats from "./textFormats"
import { SlateComponent, Element } from "../../../../../types/SlateComponent"

class ChildrenHandlers {
  constructor() {
    this.styledText = this.styledText.bind(this)
  }
  newLineSymbol() {
    return "\n"
  }
  styledText(component: SlateComponent) {
    const formats = this.textFormatsHandler(component)
    if (formats.length !== 0) {
      return {
        type: "styledText",
        text: component.text,
        styles: formats,
      } as Contentful.ChildrenHandlerReturnType
    }
  }
  simpleText(component: SlateComponent) {
    return get(component, "text") as string
  }
  link(component: Element) {
    const textChild = (component.children as Element[])[0]
    return {
      type: LINK,
      text: textChild.text,
      href: component.url,
      linkTitle: component.title,
    }
  }
  private textFormatsHandler = (component: SlateComponent): string[] => {
    return filter(textFormats, (format) => {
      if (component[format]) {
        return format
      }
    }) as string[]
  }
}

export default new ChildrenHandlers()
