import FIELD_TYPE_TEXT from "../types/FIELD_TYPE_TEXT"
import fieldsMap from "../map"
import FIELD_URL from "../fieldNames/FIELD_URL"
import FIELD_LINK_TITLE from "../fieldNames/FIELD_LINK_TITLE"
import placeholders from "../placeholders"
import get from "lodash/get"
import FieldsLinkInTextType from "../../../../types/Slate/Utils/fields/fieldsByElementType/FieldsLinkInTextType"

const fields: FieldsLinkInTextType[] = [
  {
    name: FIELD_URL,
    component: get(fieldsMap, FIELD_TYPE_TEXT),
    placeholder: get(placeholders, FIELD_URL),
  },
  {
    name: FIELD_LINK_TITLE,
    component: get(fieldsMap, FIELD_TYPE_TEXT),
    placeholder: get(placeholders, FIELD_LINK_TITLE),
  },
]

export default fields
