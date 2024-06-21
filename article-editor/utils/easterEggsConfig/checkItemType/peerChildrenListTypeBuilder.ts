import PEER_CHILDREN_LIST from "../dataTypes/PEER_CHILDREN_LIST"
import find from "lodash/find"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const typeBuilder = ({ component, item }: ComponentTypeBuilderProps) => ({
  type: PEER_CHILDREN_LIST,
  isThisType: !!find(component.listsWithEasterEggs, (o) => o.key === item && !o.FCWithEasterEggs),
})

export default typeBuilder
