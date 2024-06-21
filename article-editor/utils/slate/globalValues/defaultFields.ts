import emptyNode from "../nodes/emptyNode"
import paragraphNode from "../nodes/paragraphNode"
import descriptionNode from "../nodes/descriptionNode"
import imageNode from "../nodes/imageNode"
import signatureNode from "../nodes/signatureNode"
import addImageNode from "../nodes/addImageNode"
import listItemNode from "../nodes/listItemNode"
import unorderedListItemNode from "../nodes/unorderedListItemNode"
import codeItemNode from "../nodes/codeItemNode"
import languageSelectorNode from "../nodes/languageSelectorNode"
import linkNode from "../nodes/linkNode"
import CODE_SNIPPET from "./article/CODE_SNIPPET"
import IMAGE_COLUMN_WITH_TEXT from "./article/IMAGE_COLUMN_WITH_TEXT"
import QUOTE from "./article/QUOTE"
import IMAGE_CAROUSEL from "./article/IMAGE_CAROUSEL"
import IMAGE_WITH_SIZE from "./article/IMAGE_WITH_SIZE"
import TWO_IMAGE_WITH_TEXT from "./article/TWO_IMAGES_WITH_TEXT"
import UNORDERED_LIST from "./article/nestedTypes/UNORDERED_LIST"
import ORDERED_LIST from "./article/nestedTypes/ORDERED_LIST"
import CODE from "./article/CODE"
import YOUTUBE from "./article/ARTICLE_YOUTUBE"
import titleNode from "../nodes/titleNode"
import originSnippetSelectorNode from "../nodes/originSnippetSelectorNode"
import heightNode from "../nodes/heightNode"
import GRAY_BLOCK_WITH_TEXT from "./article/GRAY_BLOCK_WITH_TEXT"
import TEXT_WITH_GREEN_LINE from "./article/TEXT_WITH_GREEN_LINE"
import SEPARATOR from "./article/SEPARATOR"
import voidNode from "../nodes/voidNode"
import quoteTextNode from "../nodes/quoteTextNode"
import ARTICLE_TEXT from "./article/ARTICLE_TEXT"

const defaultFields = {
  default: {
    children: [emptyNode()],
  },
  [CODE_SNIPPET]: {
    children: [linkNode(), originSnippetSelectorNode(), titleNode(), heightNode()],
  },
  [IMAGE_COLUMN_WITH_TEXT]: {
    children: [imageNode(), paragraphNode()],
  },
  [QUOTE]: {
    children: [quoteTextNode(), signatureNode()],
  },
  [IMAGE_CAROUSEL]: {
    children: [addImageNode()],
  },
  [IMAGE_WITH_SIZE]: {
    children: [imageNode()],
  },
  [TWO_IMAGE_WITH_TEXT]: {
    children: [descriptionNode(), imageNode(), imageNode()],
  },
  [UNORDERED_LIST]: {
    children: [unorderedListItemNode()],
  },
  [ORDERED_LIST]: {
    children: [listItemNode()],
  },
  [CODE]: {
    children: [codeItemNode(), languageSelectorNode()],
  },
  [YOUTUBE]: {
    children: [linkNode("Type the video id")],
  },
  [GRAY_BLOCK_WITH_TEXT]: {
    children: [descriptionNode()],
  },
  [TEXT_WITH_GREEN_LINE]: {
    children: [descriptionNode()],
  },
  [SEPARATOR]: {
    children: [voidNode()],
  },
  [ARTICLE_TEXT]: {
    children: [paragraphNode()],
  },
}

export default defaultFields
