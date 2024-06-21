import map from "lodash/map"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import easterEggsListHandler from "./easterEggsListHandler"
import { NestedMap, NestedNestedMap } from "../../types/utils/jsonPageBuilder/ParsedPage"
import IStringJson from "../../types/utils/contentful/IStringJson"
import { ReactElement } from "react"

const easterEggsMapHandler = (
  easterEggsMap: NestedMap | IStringJson[] | NestedNestedMap[],
  keys: string[],
  parentComponentName: string
) => {
  const obj: { [key: string]: ReactElement[] } = {}
  const easterEggs = map(keys, (key) => {
    const listEggs = easterEggsListHandler(get(easterEggsMap, key), parentComponentName)
    if (!isEmpty(listEggs)) {
      obj[key] = listEggs
    }
  })
  if (!isEmpty(easterEggs)) return obj
}

export default easterEggsMapHandler
