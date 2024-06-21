import PEER_CHILDREN_MAP from "../dataTypes/PEER_CHILDREN_MAP"
import find from "lodash/find"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const typeBuilder = ({ component, item }: ComponentTypeBuilderProps) => ({
  type: PEER_CHILDREN_MAP,
  isThisType: !!find(component.listsWithEasterEggs, (o) => o.key === item && o.FCWithEasterEggs),
})

export default typeBuilder
