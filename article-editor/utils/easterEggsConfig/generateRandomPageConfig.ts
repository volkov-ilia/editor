import getComponentsWithEasterEggs from "./getComponentsWithEasterEggs"
import size from "lodash/size"
import generateRandomComponentConfig from "./generateRandomComponentConfig"
import random from "lodash/random"
import { PageEasterEggsConfig } from "../../types/utils/easterEggsConfig/PageEasterEggsConfig"
import PageConfigGeneratorProps from "../../types/utils/easterEggsConfig/PageConfigGeneratorProps"
import { EasterEggsMapItem } from "../../types/utils/easterEggsConfig/ComponentEasterEggsMapSimple"
import cloneDeep from "lodash/cloneDeep"
import shuffle from "lodash/shuffle"
import removeUnusedConfigs from "./removeUnusedConfigs"
import keys from "lodash/keys"

const generator = ({
  pageMax,
  pageComponents,
  easterEggsMap,
  icons,
  iconColors,
  genMax,
  sizeEasterEgg,
}: PageConfigGeneratorProps) => {
  let pageTotal = 0
  let pageUncountedTotal = 0
  let pageRandom = random(random(0, pageMax), pageMax)
  if (genMax) pageRandom = pageMax
  let free
  if (pageRandom > 0) {
    const pageEasterEggsConfig: PageEasterEggsConfig = {
      pageTotal: 0,
      pageUncountedTotal: 0,
    }
    const componentsWithEasterEggs = getComponentsWithEasterEggs(pageComponents, easterEggsMap)
    const pageEasterEggsMap: {
      [key: string]: {
        componentEasterEggsMap: EasterEggsMapItem
        easterEggsConfigKeys: string[]
      }
    } = {}
    while (pageTotal + pageUncountedTotal < pageRandom && size(componentsWithEasterEggs) > 0) {
      free = pageRandom - (pageTotal + pageUncountedTotal)
      const idx = random(0, size(componentsWithEasterEggs) - 1)
      const component = componentsWithEasterEggs[idx]
      const idComponent = (component.id || component.type) as string
      if (!pageEasterEggsMap[idComponent]) {
        const componentEasterEggsMap = cloneDeep(easterEggsMap[component.type]) as EasterEggsMapItem

        const easterEggsConfigKeys = shuffle(
          removeUnusedConfigs(keys(componentEasterEggsMap), keys(component), component.type)
        )
        pageEasterEggsMap[idComponent] = {
          componentEasterEggsMap,
          easterEggsConfigKeys,
        }
      }
      const newCount = generateRandomComponentConfig({
        componentEasterEggsMap: pageEasterEggsMap[idComponent].componentEasterEggsMap,
        easterEggsConfigKeys: pageEasterEggsMap[idComponent].easterEggsConfigKeys,
        component,
        free,
        pageEasterEggsConfig,
        iconColors,
        icons,
        genMax,
        sizeEasterEgg,
      })
      newCount.isCounted ? (pageTotal += newCount.count) : (pageUncountedTotal += newCount.count)
    }
    return {
      pageTotal,
      pageUncountedTotal,
      pageEasterEggs: pageEasterEggsConfig,
    }
  }
  return { pageTotal, pageUncountedTotal, pageEasterEggs: {} }
}

export default generator
