import TextHandler from "./componentsHandlers/common/TextHandler"
import isString from "lodash/isString"
import isArray from "lodash/isArray"
import get from "lodash/get"
import { v4 as uuidv4 } from "uuid"
import { ComponentsPropsItem, NestedNestedMap } from "../../types/utils/jsonPageBuilder/ParsedPage"

const textLinkPrepareData = (text: ComponentsPropsItem | NestedNestedMap, componentName: string, getText = false) =>
  TextHandler({
    component:
      isString(text) || isArray(text)
        ? { text: text, key: uuidv4() }
        : {
            text: get(text, "text"),
            header: get(text, "header"),
            type: get(text, "type"),
            key: get(text, "key") || uuidv4(),
            isTextItalic: get(text, "isTextItalic"),
            easterEggs: get(text, "easterEggs"),
            styles: get(text, "styles"),
          },
    parentComponentName: componentName,
    getText,
  })

export default textLinkPrepareData
