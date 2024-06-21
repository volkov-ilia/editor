import ARTICLE_TEXT from "./article/ARTICLE_TEXT"
import paragraphNode from "../nodes/paragraphNode"
import BaseType from "../../../types/Slate/Utils/nodes/BaseType"

const initialValue: BaseType[] = [
  {
    type: ARTICLE_TEXT,
    children: [paragraphNode()],
  },
]

export default initialValue
