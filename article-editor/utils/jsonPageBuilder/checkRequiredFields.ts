import { nestedFewRequiredFieldsMessage, requiredField } from "./messages"
import checkEmpty from "./checkEmpty"
import get from "lodash/get"
import forEach from "lodash/forEach"
import includes from "lodash/includes"
import { NestedMap, ParsedPageComponentProps } from "../../types/utils/jsonPageBuilder/ParsedPage"
import { ListItemComponentType } from "../../types/utils/jsonPageBuilder/ComponentHandler"

const checkAlternativeFields = (
  component: ParsedPageComponentProps | NestedMap | ListItemComponentType,
  alternativeFields: string[],
  componentName: string
) => {
  const module = alternativeFields.length
  let depSum = 0
  forEach(alternativeFields, (dependency) => {
    if (get(component, dependency)) depSum += 1
  })
  const moduleSum = depSum / module
  const expected = 1 / module
  if (moduleSum !== expected)
    // eslint-disable-next-line no-console
    console.warn(nestedFewRequiredFieldsMessage(componentName, `${alternativeFields.join(", ")}`))
}

export const checkRequiredFields = (
  component: ParsedPageComponentProps | NestedMap | ListItemComponentType,
  requiredFields: string[] = [],
  componentName: string,
  alternativeRequiredFields: string[][] = []
) => {
  forEach(requiredFields, (key) => {
    if (checkEmpty(get(component, key))) {
      // eslint-disable-next-line no-console
      if (includes(requiredFields, key)) console.warn(requiredField(componentName, key))
    }
  })
  forEach(alternativeRequiredFields, (alternativeFields) => {
    checkAlternativeFields(component, alternativeFields, componentName)
  })
}
