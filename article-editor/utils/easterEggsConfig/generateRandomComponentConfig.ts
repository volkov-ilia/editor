import size from "lodash/size"
import get from "lodash/get"
import dataHandlers from "./dataHandlers"
import random from "lodash/random"
import getComponentMaxEasterEggs from "./getComponentMaxEasterEggs"
import ComponentPageConfigGeneratorProps from "../../types/utils/easterEggsConfig/ComponentPageConfigGeneratorProps"
import { PageEasterEggsConfigItem } from "../../types/utils/easterEggsConfig/PageEasterEggsConfig"
import cloneDeep from "lodash/cloneDeep"
import { CommonComponentEasterEggs } from "../../types/utils/easterEggsConfig/DataHandlerProps"

const generator = ({
  componentEasterEggsMap,
  component,
  free,
  pageEasterEggsConfig,
  icons,
  iconColors,
  genMax,
  sizeEasterEgg,
  easterEggsConfigKeys,
}: ComponentPageConfigGeneratorProps) => {
  const idComponent = (component.id || component.type) as string
  const componentMax = getComponentMaxEasterEggs({
    componentEasterEggsMap,
    easterEggsConfigKeys,
    component,
  })
  const freeMax = componentMax > free ? free : componentMax
  let componentRandom = random(random(0, freeMax), freeMax)
  if (genMax) componentRandom = componentMax
  const componentCount = { count: 0, isCounted: false }
  if (componentRandom > 0) {
    if (!pageEasterEggsConfig[idComponent]) {
      pageEasterEggsConfig[idComponent] = {
        type: component.type,
        componentTotal: 0,
        componentUncountedTotal: 0,
      } as PageEasterEggsConfigItem
    }
    const tempPageEasterEggs = cloneDeep(pageEasterEggsConfig[idComponent])
    const randConfigIdx = random(0, size(easterEggsConfigKeys) - 1)
    const key = easterEggsConfigKeys[randConfigIdx]
    const item = componentEasterEggsMap[key]
    const handler = get(dataHandlers, item.dataType)
    try {
      const { isCreated, isCounted } = handler({
        item,
        componentEasterEggs: tempPageEasterEggs as unknown as CommonComponentEasterEggs,
        component,
        icons,
        iconColors,
        sizeEasterEgg,
      })
      if (isCreated) {
        componentCount.count = 1
        componentCount.isCounted = isCounted
        const tempAs = tempPageEasterEggs as PageEasterEggsConfigItem
        const accumulateKey = isCounted ? "componentTotal" : "componentUncountedTotal"
        tempAs[accumulateKey] = (tempAs[accumulateKey] as number) + 1
        pageEasterEggsConfig[idComponent] = tempPageEasterEggs as PageEasterEggsConfigItem
        if (item.isEmpty) {
          delete componentEasterEggsMap[key]
        }
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      return { count: 0, isCounted: false }
    }
    if (item.isEmpty) {
      easterEggsConfigKeys.splice(randConfigIdx, 1)
    }
  }
  return componentCount
}

export default generator
