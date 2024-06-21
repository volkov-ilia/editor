import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import { checkRequiredFields } from "../../checkRequiredFields"
import React, { ReactElement } from "react"
import { Points } from "hwdtech-admin-components"
import RoundIconHandler from "./RoundIconHandler"
import textLinkPrepareData from "../../textLinkPrepareData"
import map from "lodash/map"
import easterEggsListHandler from "../../easterEggsListHandler"
import { NestedComponentHandlerFC } from "../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap, NestedNestedMap } from "../../../../types/utils/jsonPageBuilder/ParsedPage"
import IStringJson from "../../../../types/utils/contentful/IStringJson"

const PointsHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "Points")
  const fields = {
    items: get(component, "text") as NestedNestedMap[] | ReactElement[],
    icon: get(component, "icons") as IStringJson[] | NestedNestedMap[] | ReactElement[],
    className: get(component, "className"),
    style: get(component, "style"),
    key: get(component, "key"),
    type: get(component, "type"),
    onRight: get(component, "onRight"),
    easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
  }

  if (fields.items) {
    fields.items = map(fields.items as IStringJson[] | NestedNestedMap[], (el) => {
      return textLinkPrepareData(el, componentName) as ReactElement
    })
  }

  if (fields.icon) {
    fields.icon = map(
      fields.icon as NestedNestedMap[],
      (i) =>
        RoundIconHandler({
          component: {
            icon: i.icon as string,
            iconColor: i.iconColor as string,
            className: "mr-4",
            ampStyle: { marginRight: "1rem" },
          },
          parentComponentName: componentName,
        }) as ReactElement
    )
  }

  const requiredFields = ["text"]

  checkRequiredFields(component, requiredFields, componentName)

  return <Points {...fields} />
}

export default PointsHandler
