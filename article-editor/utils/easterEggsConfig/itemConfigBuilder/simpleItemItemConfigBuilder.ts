import SIMPLE_ITEM from "../dataTypes/SIMPLE_ITEM"
import size from "lodash/size"
import { SimpleItemItemConfigBuilderFunc } from "../../../types/utils/easterEggsConfig/ConfigBuilder"

const configBuilder: SimpleItemItemConfigBuilderFunc = ({ item, easterEggs }) => {
  return {
    dataType: SIMPLE_ITEM,
    key: item,
    max: size(easterEggs),
    easterEggs: easterEggs,
  }
}

export default configBuilder
