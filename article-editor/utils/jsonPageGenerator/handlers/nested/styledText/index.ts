import paragraphHandler from "./paragraphHandler"
import PARAGRAPH from "../../../../slate/globalValues/article/nestedTypes/PARAGRAPH"
import SECOND_HEADER from "../../../../slate/globalValues/article/nestedTypes/SECOND_HEADER"
import THIRD_HEADER from "../../../../slate/globalValues/article/nestedTypes/THIRD_HEADER"
import headersHandler from "./headersHandler"
import ORDERED_LIST from "../../../../slate/globalValues/article/nestedTypes/ORDERED_LIST"
import UNORDERED_LIST from "../../../../slate/globalValues/article/nestedTypes/UNORDERED_LIST"
import listsHandler from "./listsHandler"

const styledTextHandlers = {
  [PARAGRAPH]: paragraphHandler,
  [SECOND_HEADER]: headersHandler,
  [THIRD_HEADER]: headersHandler,
  [ORDERED_LIST]: listsHandler,
  [UNORDERED_LIST]: listsHandler,
}

export default styledTextHandlers
