import find from "lodash/find"
import forEach from "lodash/forEach"
import { componentNestedConfigGenerator } from "../componentEasterEggsMapGenerator"
import countMax from "./countMax"
import { SimpleMapItemConfigBuilderFunc } from "../../../types/utils/easterEggsConfig/ConfigBuilder"
import { EasterEggsConfigChildrenMap } from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import jsonChildrenKeys from "./jsonChildrenKeys"
import SIMPLE_MAP from "../dataTypes/SIMPLE_MAP"

const configBuilder: SimpleMapItemConfigBuilderFunc = ({ item, componentMapWithEasterEggs }) => {
  let itemConfig: EasterEggsConfigChildrenMap
  const data = find(componentMapWithEasterEggs, { key: item })
  if (!data) return
  let nested

  forEach(data.FCWithEasterEggs, (_) => {
    const config = componentNestedConfigGenerator(data)
    if (config) nested = config
  })

  if (nested) {
    itemConfig = {
      dataType: SIMPLE_MAP,
      jsonChildrenKey: jsonChildrenKeys[item],
      key: item,
      nested: nested,
      max: countMax(nested),
    }
    return itemConfig
  }
}

export default configBuilder
