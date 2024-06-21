import LINK from "../childrenTypes/LINK"
import { Element } from "slate"

const handler = (component: Element) => {
  const textChild = (component.children as Element[])[0]
  return {
    type: LINK,
    text: textChild.text,
    href: component.url,
    linkTitle: component.title,
  }
}

export default handler
