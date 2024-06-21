import peerChildrenListTypeBuilder from "./peerChildrenListTypeBuilder"
import peerChildrenMapTypeBuilder from "./peerChildrenMapTypeBuilder"
import simpleMapTypeBuilder from "./simpleMapTypeBuilder"
import simpleItemTypeBuilder from "./simpleItemTypeBuilder"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const checkAllTypes = ({ component, item }: ComponentTypeBuilderProps) => [
  peerChildrenListTypeBuilder({ component, item }),
  peerChildrenMapTypeBuilder({ component, item }),
  simpleMapTypeBuilder({ component, item }),
  simpleItemTypeBuilder({ component, item }),
]

export default checkAllTypes
