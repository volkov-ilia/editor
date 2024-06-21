import componentConfigGenerator from "../componentConfigGenerator"
import size from "lodash/size"
import get from "lodash/get"
import { EasterEggsConfigSimpleItemFunc } from "../../../types/utils/easterEggsConfig/DataHandlerProps"
import { EasterEggsConfigSimpleItem } from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"

const handler: EasterEggsConfigSimpleItemFunc = ({ item, componentEasterEggs, icons, iconColors, sizeEasterEgg }) => {
  const itemas = item as EasterEggsConfigSimpleItem
  const sizeBefore = size(get(componentEasterEggs, item.key))
  const iconData = componentConfigGenerator({
    item: itemas,
    parentJson: componentEasterEggs,
    parentJsonKey: item.key,
    icons,
    iconColors,
    sizeEasterEgg,
  })
  if (size(itemas.easterEggs) === 0) {
    item.isEmpty = true
  }
  const sizeAfter = size(get(componentEasterEggs, item.key))
  return { isCreated: sizeBefore !== sizeAfter, isCounted: iconData.isCounted }
}
export default handler
