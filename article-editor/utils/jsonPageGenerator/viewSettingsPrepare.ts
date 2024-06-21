import { ViewSettingsHandlerFunc } from "../../types/utils/jsonPageGenerator/NodeHandler"
import get from "lodash/get"
import omitBy from "lodash/omitBy"
import isNil from "lodash/isNil"
import effectsMap from "./effectsMap"

const viewSettingsPrepare: ViewSettingsHandlerFunc = ({ component }) => {
  const fields = {
    theme: get(component, "theme"),
    effect: get(effectsMap, get(component, "effect") as string),
  }
  return omitBy(fields, isNil)
}

export default viewSettingsPrepare
