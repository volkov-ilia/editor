import { nestedFieldPathBuilder } from "../../messages"
import get from "lodash/get"
import ButtonActionsHandler from "./ButtonActionsHandler"
import { checkRequiredFields } from "../../../checkRequiredFields"
import { NestedComponentHandlerFC } from "../../../../../types/utils/jsonPageBuilder/ComponentHandler"
import { NestedMap } from "../../../../../types/utils/jsonPageBuilder/ParsedPage"

const ActionHandler: NestedComponentHandlerFC = ({ component, parentComponentName, isAmp }) => {
  const componentName = nestedFieldPathBuilder(parentComponentName, "Action")
  const fields = {
    action: ButtonActionsHandler(componentName, get(component, "action") as string),
    args: get(component, "args") as NestedMap,
  }

  const requiredFields = ["action"]

  if (fields.action || fields.args) checkRequiredFields(component, requiredFields, componentName)

  return fields.action ? fields.action({ ...fields.args, isAmp }) : undefined
}

export default ActionHandler
