import React from "react"
import get from "lodash/get"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { PrimaryButton } from "hwdtech-admin-components"
import { nestedFieldPathBuilder } from "../../messages"
import LinkHandler from "./LinkHandler"
import ActionHandler from "./ActionHandler"
import easterEggsListHandler from "../../../easterEggsListHandler"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const PrimaryButtonHandler: NestedComponentHandlerFC = ({ component, parentComponentName, isAmp }) => {
  if (get(component, "text")) {
    const componentName = nestedFieldPathBuilder(parentComponentName, "PrimaryButton")
    const linkFields = LinkHandler({
      component: (get(component, "linkMeta[0]") || get(component, "linkMeta")) as NestedMap,
      parentComponentName: componentName,
    }) as NestedMap
    const fields = {
      text: get(component, "text"),
      title: get(component, "title"),
      action: ActionHandler({
        component: {
          action: get(component, "action"),
          args: get(component, "actionArgs[0]") || get(component, "actionArgs"),
        },
        parentComponentName: componentName,
        isAmp,
      }),
      disabled: get(component, "disabled"),
      type: get(component, "type"),
      isNotUpperCase: get(component, "isNotUpperCase"),
      ampStyle: get(component, "ampStyle"),
      className: get(component, "className"),
      ...linkFields,
      easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
    }

    const requiredFields = ["text"]

    const alternativeRequiredFields = [["linkMeta", "action"]]

    checkRequiredFields(component, requiredFields, componentName, alternativeRequiredFields)

    return <PrimaryButton {...fields} />
  }
  return <></>
}

export default PrimaryButtonHandler
