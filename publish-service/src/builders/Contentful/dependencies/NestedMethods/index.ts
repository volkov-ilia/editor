import { concat, every, find, findLastIndex, forEach, get, indexOf, isEmpty, keys } from "lodash"
import Contentful from "../../../../types/Contentful"
import { ALT, DESCRIPTION, HEIGHT, IMAGE_DESCRIPTION } from "../TypesVariables"
import childrenNormalizerMap from "./ChildrenNormalizer"
import styledTextHandlers from "./StyledTextHandlers"
import { SlateComponent } from "../../../../types/SlateComponent"
import Content from "../../../../../../common/types/Content"

class NestedMethods {
  static imageHandler: Contentful.NestedNodeHandler = (component) => {
    const fields: Contentful.IStringJson = {}
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

  static slateTextHandler: Contentful.SlateTextHandler = (component) => {
    let texts: Contentful.ChildrenHandlerReturnType[] = []
    forEach(component, (child, idx) => {
      const index = parseInt(idx)
      const normalizedComponent = this.normalizationOfChildren(child)
      const handler = get(styledTextHandlers, normalizedComponent.type as string)
      if (handler) {
        const handled = handler(normalizedComponent)
        texts = concat(texts, handled)
        if (index !== findLastIndex(component) && handled !== "\n") texts.push("\n")
      }
    })
    return {
      text: texts,
    }
  }

  static getTextFromChild = (parent: SlateComponent, childIdx = 0) => {
    return get(parent, `children[${childIdx}].text`)
  }

  static checkImportant = (componentName: string, important: string[], component: Contentful.NestedNodeHandler | Content.PageFields) => {
    const componentKeys = keys(component)
    forEach(important, (field) => {
      const contains = indexOf(componentKeys, field) !== -1
      // eslint-disable-next-line no-console
      if (!contains) console.warn(this.vitalsFieldMessage(componentName, field))
    })
  }

  static vitalsFieldMessage = (componentName: string, key: string) =>
    `[${componentName}] The field "${key}" is required here.\n[HowToFix] Please enter this field.`

  static containsVitals = (componentName: string, vitals: string[], component: Contentful.NestedNodeHandler | Content.PageFields) => {
    return every(vitals, (field) => {
      return !isEmpty(component[field])
    })
  }

  private static normalizationOfChildren = (component: SlateComponent) => {
    const normalizer = get(childrenNormalizerMap, component.type as string, get(childrenNormalizerMap, "default"))
    return normalizer(component)
  }
}

export default NestedMethods
