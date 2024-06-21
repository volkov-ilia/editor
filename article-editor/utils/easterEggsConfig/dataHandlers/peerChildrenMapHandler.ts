import forEach from "lodash/forEach"
import size from "lodash/size"
import componentConfigGenerator from "../componentConfigGenerator"
import random from "lodash/random"
import values from "lodash/values"
import pickBy from "lodash/pickBy"
import includes from "lodash/includes"
import get from "lodash/get"
import componentJsonFields from "../componentJsonFields"
import keys from "lodash/keys"
import {
  ComponentEasterEggsListValues,
  EasterEggsConfigChildrenMapFunc,
} from "../../../types/utils/easterEggsConfig/DataHandlerProps"
import {
  EasterEggsConfigChildrenMap,
  EasterEggsConfigSimpleItem,
} from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import { ParsedPageComponentProps } from "../../../types/utils/easterEggsConfig/ParsedPage"
import every from "lodash/every"
import PEER_CHILDREN_MAP from "../dataTypes/PEER_CHILDREN_MAP"

const handler: EasterEggsConfigChildrenMapFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}) => {
  const itemas = item as EasterEggsConfigChildrenMap
  const listKeys = itemas.jsonChildrenKey
  let listKey
  forEach(listKeys, (key) => {
    if (component[key]) {
      listKey = key
    }
  })
  if (listKey) {
    const componentItems = component[listKey] as ParsedPageComponentProps
    const randIdx = random(0, size(componentItems) - 1)
    const actualNested = pickBy(itemas.nested, (value, key) => {
      const originKey = get(componentJsonFields, `${component.type}.nested.${itemas.key}.${key}`)
      return includes(keys(get(componentItems, randIdx)), originKey)
    })
    const nestedArray = values(actualNested)
    if (size(nestedArray) > 0) {
      const randNestedIdx = random(0, size(actualNested) - 1)
      const randNested = nestedArray[randNestedIdx]
      if (!componentEasterEggs[listKey])
        componentEasterEggs[listKey] = {
          dataType: PEER_CHILDREN_MAP,
        }
      let list = componentEasterEggs[listKey][randIdx]
      if (!list) {
        componentEasterEggs[listKey][randIdx] = {}
        list = componentEasterEggs[listKey][randIdx]
      }
      const sizeBefore = size(get(list, randNested.key))
      const iconData = componentConfigGenerator({
        item: randNested as EasterEggsConfigSimpleItem,
        parentJson: list as ComponentEasterEggsListValues,
        parentJsonKey: randNested.key,
        icons,
        iconColors,
        sizeEasterEgg,
      })
      const sizeAfter = size(get(componentEasterEggs[listKey][randIdx], randNested.key))
      const everyConfigIsEmpty = every(itemas.nested, (i) => size((i as EasterEggsConfigSimpleItem).easterEggs) === 0)
      if (everyConfigIsEmpty) {
        item.isEmpty = true
      }
      return {
        isCreated: sizeBefore !== sizeAfter,
        isCounted: iconData.isCounted,
      }
    }
    return {
      isCreated: false,
      isCounted: false,
    }
  } else {
    throw Error(
      `There should be one valid listKey at least, listKeys: ${listKeys}. Component type is ${component.type}`
    )
  }
}
export default handler
