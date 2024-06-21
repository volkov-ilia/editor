import map from "lodash/map"
import EasterEggsHandler from "./componentsHandlers/common/nestedComponents/EasterEggsHandler"
import { NestedMap } from "../../types/utils/jsonPageBuilder/ParsedPage"
import { ReactElement } from "react"

const easterEggsListHandler = (easterEggsList: NestedMap[], parentComponentName: string) => {
  return map(easterEggsList, (easterEgg) =>
    EasterEggsHandler({ component: easterEgg, parentComponentName })
  ) as ReactElement[]
}

export default easterEggsListHandler
