import BOLD from "../globalValues/leafs/BOLD"
import ITALIC from "../globalValues/leafs/ITALIC"
import STRIKE from "../globalValues/leafs/STRIKE"
import UNDERLINE from "../globalValues/leafs/UNDERLINE"
import ORDERED_LIST from "../globalValues/article/nestedTypes/ORDERED_LIST"
import UNORDERED_LIST from "../globalValues/article/nestedTypes/UNORDERED_LIST"
import LINK_IN_TEXT from "../globalValues/article/nestedTypes/LINK_IN_TEXT"

const toolbar: () => string[] = () => [BOLD, ITALIC, STRIKE, UNDERLINE, ORDERED_LIST, UNORDERED_LIST, LINK_IN_TEXT]

export default toolbar
