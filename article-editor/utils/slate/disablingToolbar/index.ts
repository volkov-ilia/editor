import ORDERED_LIST from "../globalValues/article/nestedTypes/ORDERED_LIST"
import UNORDERED_LIST from "../globalValues/article/nestedTypes/UNORDERED_LIST"
import H3 from "../globalValues/article/nestedTypes/THIRD_HEADER"
import H2 from "../globalValues/article/nestedTypes/SECOND_HEADER"
import LINK_IN_TEXT from "../globalValues/article/nestedTypes/LINK_IN_TEXT"
import TEXT_CENTER from "../globalValues/leafs/TEXT_CENTER"
import TEXT_RIGHT from "../globalValues/leafs/TEXT_RIGHT"
import PARAGRAPH from "../globalValues/article/nestedTypes/PARAGRAPH"
import DESCRIPTION from "../globalValues/article/nestedTypes/DESCRIPTION"
import IMAGE_DESCRIPTION from "../globalValues/article/nestedTypes/IMAGE_DESCRIPTION"
import QUOTE_TEXT from "../globalValues/article/nestedTypes/QUOTE_TEXT"
import LIST_ITEM from "../globalValues/article/nestedTypes/LIST_ITEM"
import UNORDERED_LIST_ITEM from "../globalValues/article/nestedTypes/UNORDERED_LIST_ITEM"
import ARTICLE_TEXT from "../globalValues/article/ARTICLE_TEXT"
import GRAY_BLOCK_WITH_TEXT from "../globalValues/article/GRAY_BLOCK_WITH_TEXT"
import TEXT_WITH_GREEN_LINE from "../globalValues/article/TEXT_WITH_GREEN_LINE"
import paragraphToolbar from "./paragraphToolbar"
import descriptionToolbar from "./descriptionToolbar"
import textWithGreenLineToolbar from "./textWithGreenLineToolbar"
import grayBlockWithTextToolbar from "./grayBlockWithTextToolbar"
import articleTextToolbar from "./articleTextToolbar"
import listToolbar from "./listToolbar"
import listItemToolbar from "./listItemToolbar"
import textAlignToolbar from "./textAlignToolbar"
import linkInTextToolbar from "./linkInTextToolbar"
import headerToolbar from "./headerToolbar"
import quoteTextToolbar from "./quoteTextToolbar"
import imageDescriptionToolbar from "./imageDescriptionToolbar"

const map = {
  [PARAGRAPH]: paragraphToolbar(),
  [DESCRIPTION]: descriptionToolbar(),
  [IMAGE_DESCRIPTION]: imageDescriptionToolbar(),
  [QUOTE_TEXT]: quoteTextToolbar(),
  [H2]: headerToolbar(),
  [H3]: headerToolbar(),
  [LINK_IN_TEXT]: linkInTextToolbar(),
  [TEXT_CENTER]: textAlignToolbar(),
  [TEXT_RIGHT]: textAlignToolbar(),
  [UNORDERED_LIST_ITEM]: listItemToolbar(),
  [LIST_ITEM]: listItemToolbar(),
  [ORDERED_LIST]: listToolbar(),
  [UNORDERED_LIST]: listToolbar(),
  [ARTICLE_TEXT]: articleTextToolbar(),
  [GRAY_BLOCK_WITH_TEXT]: grayBlockWithTextToolbar(),
  [TEXT_WITH_GREEN_LINE]: textWithGreenLineToolbar(),
}

export default map
