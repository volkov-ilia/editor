import size from "lodash/size"
import componentConfigGenerator from "../componentConfigGenerator"
import random from "lodash/random"
import get from "lodash/get"
import values from "lodash/values"
import {
  ComponentEasterEggsListValues,
  EasterEggsConfigSimpleMapFunc,
} from "../../../types/utils/easterEggsConfig/DataHandlerProps"
import {
  EasterEggsConfigSimpleItem,
  EasterEggsConfigSimpleMap,
} from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import every from "lodash/every"
import SIMPLE_MAP from "../dataTypes/SIMPLE_MAP"

const handler: EasterEggsConfigSimpleMapFunc = ({ item, componentEasterEggs, icons, iconColors, sizeEasterEgg }) => {
  const itemas = item as EasterEggsConfigSimpleMap
  const listKey = itemas.key
  if (!componentEasterEggs[listKey])
    componentEasterEggs[listKey] = {
      dataType: SIMPLE_MAP,
    }
  const randNestedIdx = random(0, size(itemas.nested) - 1)
  const randNested = values(itemas.nested)[randNestedIdx]
  const sizeBefore = size(get(componentEasterEggs[listKey], randNested.key))
  const iconData = componentConfigGenerator({
    item: randNested as EasterEggsConfigSimpleItem,
    parentJson: componentEasterEggs[listKey] as ComponentEasterEggsListValues,
    parentJsonKey: randNested.key,
    icons,
    iconColors,
    sizeEasterEgg,
  })
  const sizeAfter = size(get(componentEasterEggs[listKey], randNested.key))
  const everyConfigIsEmpty = every(itemas.nested, (i) => size((i as EasterEggsConfigSimpleItem).easterEggs) === 0)
  if (everyConfigIsEmpty) {
    item.isEmpty = true
  }
  return { isCreated: sizeBefore !== sizeAfter, isCounted: iconData.isCounted }
}
export default handler
