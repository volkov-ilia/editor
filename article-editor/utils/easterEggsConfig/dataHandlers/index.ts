import PEER_CHILDREN_LIST from "../dataTypes/PEER_CHILDREN_LIST"
import peerChildrenListHandler from "./peerChildrenListHandler"
import PEER_CHILDREN_MAP from "../dataTypes/PEER_CHILDREN_MAP"
import peerChildrenMapHandler from "./peerChildrenMapHandler"
import SIMPLE_ITEM from "../dataTypes/SIMPLE_ITEM"
import simpleItemHandler from "./simpleItemHandler"
import SIMPLE_MAP from "../dataTypes/SIMPLE_MAP"
import simpleMapHandler from "./simpleMapHandler"
import { DataHandlerMapProps } from "../../../types/utils/easterEggsConfig/DataHandlerProps"

const map: DataHandlerMapProps = {
  [PEER_CHILDREN_LIST]: peerChildrenListHandler,
  [PEER_CHILDREN_MAP]: peerChildrenMapHandler,
  [SIMPLE_ITEM]: simpleItemHandler,
  [SIMPLE_MAP]: simpleMapHandler,
}

export default map
