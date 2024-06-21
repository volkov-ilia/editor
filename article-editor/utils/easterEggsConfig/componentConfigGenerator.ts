import size from "lodash/size"
import random from "lodash/random"
import ComponentConfigGeneratorProps from "../../types/utils/easterEggsConfig/ComponentConfigGeneratorProps"
import EasterEggsComponentConfig from "../../types/utils/easterEggsConfig/EasterEggsComponentConfig"
import keys from "lodash/keys"
import toString from "lodash/toString"
import calculateSizeProportions from "../processSVG/calculateSizeProportions"
import ceil from "lodash/ceil"

const generator = ({
  item,
  parentJson,
  parentJsonKey,
  icons,
  iconColors,
  sizeEasterEgg,
}: ComponentConfigGeneratorProps) => {
  const randIdxConfig = random(0, size(item.easterEggs) - 1)
  const config = item.easterEggs.splice(randIdxConfig, 1)[0]
  const iconsKeys = keys(icons)
  const randomIconIdx = random(0, size(icons) - 1)
  const content = iconsKeys[randomIconIdx]
  const iconData = icons[content]
  const proportionHtoW = calculateSizeProportions(iconData.value)
  const currentHeight = ceil(random(sizeEasterEgg.minWidth, sizeEasterEgg.maxWidth, true), 3)
  const currentWidth = ceil(currentHeight * proportionHtoW, 3)
  const easterEgg = {
    ...config,
    content,
    color: iconColors[random(0, size(iconColors) - 1)],
    width: toString(currentWidth),
    height: toString(currentHeight),
  }
  if (!parentJson[parentJsonKey]) parentJson[parentJsonKey] = []
  ;(parentJson[parentJsonKey] as EasterEggsComponentConfig[]).push(easterEgg)
  return iconData
}

export default generator
