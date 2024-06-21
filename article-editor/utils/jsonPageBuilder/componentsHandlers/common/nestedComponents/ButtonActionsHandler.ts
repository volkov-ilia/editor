import buttonActions from "../../actions/buttonActions"
import { NoButtonActions } from "../../messages"
import get from "lodash/get"

const ButtonActionsHandler = (componentName: string, actionKey: string) => {
  if (actionKey) {
    const action = get(buttonActions, actionKey)
    if (!action) throw NoButtonActions(componentName, actionKey)
    return action
  }
}

export default ButtonActionsHandler
