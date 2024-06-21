import get from "lodash/get"
import FIELD_URL from "../fields/fieldNames/FIELD_URL"
import FIELD_LINK_TITLE from "../fields/fieldNames/FIELD_LINK_TITLE"
import insertLink from "../insertLink"
import CallbackLinkInTextType from "../../../types/Slate/Utils/callbacks/СallbackLinkInTextType"

const callbackLinkInText: ({ editor, value }: CallbackLinkInTextType) => void = ({ editor, value }) => {
  const url = get(value, FIELD_URL)
  const title = get(value, FIELD_LINK_TITLE)
  insertLink(editor, url, title)
}

export default callbackLinkInText
