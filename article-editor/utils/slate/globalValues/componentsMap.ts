import GRAY_BLOCK_WITH_TEXT from "./article/GRAY_BLOCK_WITH_TEXT"
import IMAGE_CAROUSEL from "./article/IMAGE_CAROUSEL"
import TWO_IMAGE_WITH_TEXT from "./article/TWO_IMAGES_WITH_TEXT"
import TEXT_WITH_GREEN_LINE from "./article/TEXT_WITH_GREEN_LINE"
import SEPARATOR from "./article/SEPARATOR"
import IMAGE_COLUMN_WITH_TEXT from "./article/IMAGE_COLUMN_WITH_TEXT"
import YOUTUBE from "./article/ARTICLE_YOUTUBE"
import CODE_SNIPPET from "./article/CODE_SNIPPET"
import CODE from "./article/CODE"
import QUOTE from "./article/QUOTE"
import IMAGE_WITH_SIZE from "./article/IMAGE_WITH_SIZE"
import ARTICLE_TEXT from "./article/ARTICLE_TEXT"
import ComponentsMapType from "../../../types/Slate/Utils/globalValues/ComponentsMapType"

const componentsMap: ComponentsMapType[] = [
  {
    format: ARTICLE_TEXT,
    name: ARTICLE_TEXT,
  },
  {
    format: GRAY_BLOCK_WITH_TEXT,
    name: GRAY_BLOCK_WITH_TEXT,
  },
  {
    format: IMAGE_CAROUSEL,
    name: IMAGE_CAROUSEL,
  },
  {
    format: TWO_IMAGE_WITH_TEXT,
    name: TWO_IMAGE_WITH_TEXT,
  },
  {
    format: TEXT_WITH_GREEN_LINE,
    name: TEXT_WITH_GREEN_LINE,
  },
  {
    format: SEPARATOR,
    name: SEPARATOR,
  },
  {
    format: IMAGE_COLUMN_WITH_TEXT,
    name: IMAGE_COLUMN_WITH_TEXT,
  },
  {
    format: YOUTUBE,
    name: YOUTUBE,
  },
  {
    format: QUOTE,
    name: QUOTE,
  },
  {
    format: CODE_SNIPPET,
    name: CODE_SNIPPET,
  },
  {
    format: IMAGE_WITH_SIZE,
    name: IMAGE_WITH_SIZE,
  },
  {
    format: CODE,
    name: CODE,
  },
]

export default componentsMap
