import PEER_CHILDREN_LIST from "../dataTypes/PEER_CHILDREN_LIST"
import size from "lodash/size"
import jsonChildrenKeys from "./jsonChildrenKeys"
import { PeerChildrenListItemConfigBuilderFunc } from "../../../types/utils/easterEggsConfig/ConfigBuilder"

const configBuilder: PeerChildrenListItemConfigBuilderFunc = ({ item, easterEggs }) => {
  return {
    dataType: PEER_CHILDREN_LIST,
    jsonChildrenKey: jsonChildrenKeys[item],
    key: item,
    max: size(easterEggs),
    easterEggs: easterEggs,
  }
}

export default configBuilder
