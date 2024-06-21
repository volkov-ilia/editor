import forEach from "lodash/forEach"
import size from "lodash/size"
import { GetMaxFunc, LocalMaxFun } from "../../types/utils/easterEggsConfig/GetMax"
import { EasterEggsConfigChildrenList } from "../../types/utils/easterEggsConfig/EasterEggsConfigItem"

const localMax: LocalMaxFun = ({ config, component }) => {
  if ((config as EasterEggsConfigChildrenList).jsonChildrenKey) {
    let listKey
    forEach((config as EasterEggsConfigChildrenList).jsonChildrenKey, (key) => {
      if (component[key]) {
        listKey = key
      }
    })
    if (listKey) {
      const inComponent = component[listKey]
      return config.max * size(inComponent)
    }
  }
  return config.max
}

const getMax: GetMaxFunc = ({ easterEggsConfigKeys, componentEasterEggsMap, component }) => {
  let sum = 0
  forEach(easterEggsConfigKeys, (key) => {
    const max = localMax({ config: componentEasterEggsMap[key], component })
    sum += max
  })
  return sum
}

export default getMax
