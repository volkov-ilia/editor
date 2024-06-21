import PEER_CHILDREN_MAP from "../dataTypes/PEER_CHILDREN_MAP"
import find from "lodash/find"
import { componentNestedConfigGenerator } from "../componentEasterEggsMapGenerator"
import jsonChildrenKeys from "./jsonChildrenKeys"
import countMax from "./countMax"
import { EasterEggsConfigChildrenMap } from "../../../types/utils/easterEggsConfig/EasterEggsConfigItem"
import { PeerChildrenMapItemConfigBuilderFunc } from "../../../types/utils/easterEggsConfig/ConfigBuilder"

const configBuilder: PeerChildrenMapItemConfigBuilderFunc = ({ item, componentListsWithEasterEggs }) => {
  let itemConfig: EasterEggsConfigChildrenMap
  const data = find(componentListsWithEasterEggs, { key: item })
  if (!data) return
  const nested = componentNestedConfigGenerator(data)

  if (nested) {
    itemConfig = {
      dataType: PEER_CHILDREN_MAP,
      jsonChildrenKey: jsonChildrenKeys[item],
      key: item,
      nested: nested,
      max: countMax(nested),
    }
    return itemConfig
  }
}

export default configBuilder
