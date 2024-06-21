import FieldsLinkInText from "./fieldsByElementType/FieldsLinkInText"
import LINK_IN_TEXT from "../globalValues/article/nestedTypes/LINK_IN_TEXT"
import fieldsIndexType from "../../../types/Slate/Utils/fields/fieldsIndexType"

const map: fieldsIndexType = {
  [LINK_IN_TEXT]: FieldsLinkInText,
}

export default map
