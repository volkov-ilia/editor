import SIMPLE_MAP from "../dataTypes/SIMPLE_MAP"
import find from "lodash/find"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const typeBuilder = ({ component, item }: ComponentTypeBuilderProps) => ({
  type: SIMPLE_MAP,
  isThisType: !!find(component.mapWithEasterEggs, { key: item }),
})

export default typeBuilder
