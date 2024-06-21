import { nestedFieldPathBuilder } from "../../messages"
import LinkHandler from "./LinkHandler"
import get from "lodash/get"
import { LabelBreadCrumbs } from "hwdtech-admin-components"
import easterEggsListHandler from "../../../easterEggsListHandler"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const LabelHandler: NestedComponentHandlerFC = ({ component, parentComponentName }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "Label")
  const fields = {
    primaryText: get(component, "primaryText"),
    usualText: get(component, "usualText"),
    primaryLinkMeta: LinkHandler({
      component: (get(component, "primaryLinkMeta[0]") || get(component, "primaryLinkMeta")) as NestedMap,
      parentComponentName: nestedFieldPathBuilder(componentName, "PrimaryLink"),
    }),
    usualLinkMeta: LinkHandler({
      component: (get(component, "usualLinkMeta[0]") || get(component, "usualLinkMeta")) as NestedMap,
      parentComponentName: nestedFieldPathBuilder(componentName, "UsualLink"),
    }),
    easterEggs: easterEggsListHandler(get(component, "easterEggs") as NestedMap[], componentName),
  }

  const requiredFields = ["primaryText", "usualText"]

  checkRequiredFields(component, requiredFields, componentName)

  return <LabelBreadCrumbs {...fields} />
}

export default LabelHandler
