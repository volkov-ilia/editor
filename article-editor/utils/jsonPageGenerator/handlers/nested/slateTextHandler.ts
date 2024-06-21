import forEach from "lodash/forEach"
import get from "lodash/get"
import { SlateTextHandler } from "../../../../types/utils/jsonPageGenerator/NodeHandler"
import styledTextHandlers from "./styledText"
import childrenNormalizer from "./styledText/normalizers/childrenNormalizer"
import ChildrenHandlerReturnType from "../../../../types/utils/jsonPageGenerator/ChildrenHandlerReturnType"
import findLastIndex from "lodash/findLastIndex"
import concat from "lodash/concat"

const slateTextHandler: SlateTextHandler = (component) => {
  let texts: ChildrenHandlerReturnType[] = []
  forEach(component, (child, idx) => {
    const index = parseInt(idx)
    const normalizedComponent = childrenNormalizer(child)
    const handler = get(styledTextHandlers, normalizedComponent.type as string)
    if (handler) {
      const handled = handler({
        component: normalizedComponent,
      })
      texts = concat(texts, handled)
      if (index !== findLastIndex(component) && handled !== "\n") texts.push("\n")
    }
  })

  return {
    text: texts,
  }
}

export default slateTextHandler
