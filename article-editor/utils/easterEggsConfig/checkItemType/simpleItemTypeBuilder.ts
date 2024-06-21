import SIMPLE_ITEM from "../dataTypes/SIMPLE_ITEM"
import find from "lodash/find"
import ComponentTypeBuilderProps from "../../../types/utils/easterEggsConfig/ComponentTypeBuilderProps"

const typeBuilder = ({ component, item }: ComponentTypeBuilderProps) => ({
  type: SIMPLE_ITEM,
  isThisType: !find(component.listsWithEasterEggs, { key: item }) && !find(component.mapWithEasterEggs, { key: item }),
})

export default typeBuilder
