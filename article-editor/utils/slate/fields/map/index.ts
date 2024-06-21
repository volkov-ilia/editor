import Text from "./Text"
import FIELD_TYPE_TEXT from "../types/FIELD_TYPE_TEXT"
import mapIndexType from "../../../../types/Slate/Utils/fields/map/mapIndexType"

const fieldsMap: mapIndexType = {
  [FIELD_TYPE_TEXT]: Text,
}

export default fieldsMap
