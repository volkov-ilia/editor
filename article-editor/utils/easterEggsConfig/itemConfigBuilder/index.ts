import PEER_CHILDREN_LIST from "../dataTypes/PEER_CHILDREN_LIST"
import PEER_CHILDREN_MAP from "../dataTypes/PEER_CHILDREN_MAP"
import SIMPLE_MAP from "../dataTypes/SIMPLE_MAP"
import SIMPLE_ITEM from "../dataTypes/SIMPLE_ITEM"
import peerChildrenListItemConfigBuilder from "./peerChildrenListItemConfigBuilder"
import peerChildrenMapItemConfigBuilder from "./peerChildrenMapItemConfigBuilder"
import simpleMapItemConfigBuilder from "./simpleMapItemConfigBuilder"
import simpleItemItemConfigBuilder from "./simpleItemItemConfigBuilder"
import { ItemConfigBuilderMapProps } from "../../../types/utils/easterEggsConfig/ConfigBuilder"

const map: ItemConfigBuilderMapProps = {
  [PEER_CHILDREN_LIST]: peerChildrenListItemConfigBuilder,
  [PEER_CHILDREN_MAP]: peerChildrenMapItemConfigBuilder,
  [SIMPLE_MAP]: simpleMapItemConfigBuilder,
  [SIMPLE_ITEM]: simpleItemItemConfigBuilder,
}

export default map
