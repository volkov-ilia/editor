import React from "react"
import get from "lodash/get"
import { nestedFieldPathBuilder } from "../../messages"
import LinkHandler from "./LinkHandler"
import { ButtonArrow } from "hwdtech-admin-components"
import easterEggsListHandler from "../../../easterEggsListHandler"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const ButtonArrowHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  if (get(component, "text")) {
    const componentName = nestedFieldPathBuilder(parentComponentName, "ButtonArrow")
    const linkFields = LinkHandler({
      component: (get(component, "linkMeta[0]") || get(component, "linkMeta")) as NestedMap,
      parentComponentName: componentName,
    }) as NestedMap
    const fields = {
      text: get(component, "text"),
      isNotUpperCase: get(component, "isNotUpperCase"),
      icon: get(component, "icon"),
      ampStyle: get(component, "ampStyle"),
      className: get(component, "className"),
      ...linkFields,
      easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
    }

    const requiredFields = ["text"]

    checkRequiredFields(component, requiredFields, componentName)

    return <ButtonArrow {...fields} />
  }
  return <></>
}

export default ButtonArrowHandler
