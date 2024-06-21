import forEach from "lodash/forEach"
import componentConfigGenerator from "../componentConfigGenerator"
import size from "lodash/size"
import random from "lodash/random"
import get from "lodash/get"
import {
  ComponentEasterEggsListValues,
  EasterEggsConfigChildrenListFunc,
} from "../../../types/utils/easterEggsConfig/DataHandlerProps"
import { EasterEggsConfigChildrenList } from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import PEER_CHILDREN_LIST from "../dataTypes/PEER_CHILDREN_LIST"

const handler: EasterEggsConfigChildrenListFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}) => {
  const itemas = item as EasterEggsConfigChildrenList
  const listKeys = itemas.jsonChildrenKey
  let listKey
  forEach(listKeys, (key) => {
    if (component[key]) {
      listKey = key
    }
  })
  if (listKey) {
    const componentItems = component[listKey]
    const randIdx = random(0, size(componentItems) - 1)
    let list = componentEasterEggs[listKey]
    if (!list) {
      componentEasterEggs[listKey] = {
        dataType: PEER_CHILDREN_LIST,
      }
      list = componentEasterEggs[listKey]
    }
    const sizeBefore = size(get(list, randIdx))
    const iconData = componentConfigGenerator({
      item: itemas,
      parentJson: list as ComponentEasterEggsListValues,
      parentJsonKey: `${randIdx}`,
      icons,
      iconColors,
      sizeEasterEgg,
    })
    const sizeAfter = size(get(list, randIdx))
    if (size(itemas.easterEggs) === 0) {
      item.isEmpty = true
    }
    return {
      isCreated: sizeBefore !== sizeAfter,
      isCounted: iconData.isCounted,
    }
  } else {
    throw Error(`There should be only one valid listKey, listKeys: ${listKeys}. Component type is ${component.type}`)
  }
}

export default handler
