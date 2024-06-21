import BOLD from "../globalValues/leafs/BOLD"
import ITALIC from "../globalValues/leafs/ITALIC"
import STRIKE from "../globalValues/leafs/STRIKE"
import UNDERLINE from "../globalValues/leafs/UNDERLINE"
import LINK_IN_TEXT from "../globalValues/article/nestedTypes/LINK_IN_TEXT"

const toolbar: () => string[] = () => [BOLD, ITALIC, STRIKE, UNDERLINE, LINK_IN_TEXT]

export default toolbar
