import checkItemType from "./checkItemType"
import itemConfigBuilder from "./itemConfigBuilder"
import forEach from "lodash/forEach"
import { easterEggsConfig } from "./easterEggsConfig"
import ListEasterEggs from "../../types/utils/easterEggsConfig/ListEasterEggs"
import {
  ComponentListEasterEggs,
  ComponentListEasterEggsCommon,
} from "../../types/utils/easterEggsConfig/ComponentListEasterEggs"
import { EasterEggsConfigItem } from "../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import ComponentEasterEggsMap from "../../types/utils/easterEggsConfig/ComponentEasterEggsMap"

export const componentNestedConfigGenerator: (component: ComponentListEasterEggsCommon) => {
  [key: string]: EasterEggsConfigItem
} = (component) => {
  const temp: { [key: string]: EasterEggsConfigItem } = {}
  if (component.FCWithEasterEggs) {
    forEach(component.FCWithEasterEggs, (item) => {
      const typeObj = checkItemType({
        component: component as ComponentListEasterEggs,
        item,
      })
      if (typeObj) {
        const configBuilder = itemConfigBuilder[typeObj.type]
        const tempItem = configBuilder({
          item,
          easterEggs: easterEggsConfig[item],
          componentMapWithEasterEggs: component.mapWithEasterEggs,
          componentListsWithEasterEggs: component.listsWithEasterEggs,
        })
        if (tempItem) temp[item] = tempItem
      }
    })
  }
  return temp
}

const generator = (listComponentsEasterEggs: ListEasterEggs) => {
  const result: ComponentEasterEggsMap = {}
  forEach(listComponentsEasterEggs, (componentValue, componentKey) => {
    const temp = componentNestedConfigGenerator(componentValue)
    if (temp) result[componentKey] = temp
  })
  return result
}

export default generator
