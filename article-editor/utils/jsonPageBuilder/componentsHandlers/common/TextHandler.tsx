import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import React, { ReactElement } from "react"
import { v4 as uuidv4 } from "uuid"
import textTypesHandlers from "../../textTypesHandlers"
import map from "lodash/map"
import isArray from "lodash/isArray"
import { NestedComponentHandlerFunc } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import getTextFromJson from "../../getTextFromJson"
import TextJson from "../../../../types/utils/jsonPageBuilder/TextJson"
import {
  NestedMap,
  NestedNestedMapChild,
  ParsedPageComponentProps,
} from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const TextHandler: NestedComponentHandlerFunc = ({ component, parentComponentName, getText }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "Text")
  const fields = {
    text: get(component, "text") as TextJson | ReactElement[],
    header: get(component, "header"),
    key: get(component, "key"),
    easterEggs: get(component, "easterEggs"),
  }

  let text: TextJson | ReactElement[] | ReactElement = fields.text as TextJson

  const requiredFields = ["text"]

  if (getText) {
    return getTextFromJson(text)
  }

  if (isArray(text)) {
    const getHandler = (t: NestedNestedMapChild) => {
      const type = get(t, "type")
      const handler = get(textTypesHandlers, type, textTypesHandlers.text)
      return handler(t as NestedMap & (string | ParsedPageComponentProps), componentName)
    }
    text = map(text, (t) => (
      <span key={(get(t, "key") as string) || uuidv4()}>{getHandler(t as unknown as NestedNestedMapChild)}</span>
    ))
  }

  const type = get(component, "type")
  const handler = get(textTypesHandlers, type as string)
  if (handler) {
    return (
      <span key={fields.key as string}>
        {handler(component as NestedMap & (string | ParsedPageComponentProps), componentName)}
      </span>
    )
  }

  text = <span key={fields.key as string}>{text}</span>

  if (fields.header) {
    text = {
      text,
      header: fields.header as string,
    }
  }

  checkRequiredFields(component, requiredFields, componentName)

  return text
}

export default TextHandler
