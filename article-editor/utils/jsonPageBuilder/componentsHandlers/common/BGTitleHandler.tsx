import { BGTitle } from "hwdtech-admin-components"
import React from "react"
import get from "lodash/get"
import LabelHandler from "./nestedComponents/LabelHandler"
import PrimaryButtonHandler from "./nestedComponents/PrimaryButtonHandler"
import ComponentTitleHandler from "./nestedComponents/ComponentTitleHandler"
import ButtonArrowHandler from "./nestedComponents/ButtonArrowHandler"
import merge from "lodash/merge"
import textLinkPrepareData from "../../textLinkPrepareData"
import { checkRequiredFields } from "../../checkRequiredFields"
import { ComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"

const BGTitleHandler: ComponentHandlerFC = ({ component, isAmp }) => {
  const componentName = "BGTitle"
  const fields = {
    key: get(component, "id"),
    id: get(component, "id"),
    img: get(component, "background"),
    label: LabelHandler({
      component: merge(get(component, "label[0]") || get(component, "label"), {
        easterEggs: get(component, "easterEggs.labelBreadCrumbs"),
      }) as NestedMap,
      parentComponentName: componentName,
    }),
    title: ComponentTitleHandler({
      component: {
        title: get(component, "title"),
        titleFirstLineCharNumber: get(component, "titleFirstLineCharNumber"),
        titleSecondLineCharNumber: get(component, "titleSecondLineCharNumber"),
        easterEggs: get(component, "easterEggs.componentTitle"),
      },
      parentComponentName: componentName,
    }),
    description: textLinkPrepareData(get(component, "description"), componentName),
    primaryButton: PrimaryButtonHandler({
      component: merge(get(component, "primaryButton[0]") || get(component, "primaryButton"), {
        easterEggs: get(component, "easterEggs.primaryButton"),
      }) as NestedMap,
      parentComponentName: componentName,
      isAmp: isAmp,
    }),
    arrowButton: ButtonArrowHandler({
      component: merge(get(component, "arrowButton[0]") || get(component, "arrowButton"), {
        easterEggs: get(component, "easterEggs.buttonArrow"),
      }) as NestedMap,
      parentComponentName: componentName,
    }),
  }

  const requiredFields = ["id", "background", "label", "title", "description"]

  checkRequiredFields(component, requiredFields, componentName)

  return <BGTitle {...fields} />
}

export default BGTitleHandler
