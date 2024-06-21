import { NodeHandlersMap } from "../../../types/utils/jsonPageGenerator/NodeHandler"
import ARTICLE_TEXT from "../../slate/globalValues/article/ARTICLE_TEXT"
import articleTextHandler from "./articleTextHandler"
import ARTICLE_YOUTUBE from "../../slate/globalValues/article/ARTICLE_YOUTUBE"
import articleYoutubeHandler from "./articleYoutubeHandler"
import CODE_SNIPPET from "../../slate/globalValues/article/CODE_SNIPPET"
import codeSnippetHandler from "./codeSnippetHandler"
import CODE from "../../slate/globalValues/article/CODE"
import codeHandler from "./codeHandler"
import GRAY_BLOCK_WITH_TEXT from "../../slate/globalValues/article/GRAY_BLOCK_WITH_TEXT"
import grayBlockWithTextHandler from "./grayBlockWithTextHandler"
import IMAGE_CAROUSEL from "../../slate/globalValues/article/IMAGE_CAROUSEL"
import imageCarouselHandler from "./imageCarouselHandler"
import IMAGE_WITH_SIZE from "../../slate/globalValues/article/IMAGE_WITH_SIZE"
import imageWithSizeHandler from "./imageWithSizeHandler"
import QUOTE from "../../slate/globalValues/article/QUOTE"
import quoteHandler from "./quoteHandler"
import SEPARATOR from "../../slate/globalValues/article/SEPARATOR"
import separatorHandler from "./separatorHandler"
import TEXT_WITH_GREEN_LINE from "../../slate/globalValues/article/TEXT_WITH_GREEN_LINE"
import textWithGreenLineHandler from "./textWithGreenLineHandler"
import TWO_IMAGE_WITH_TEXT from "../../slate/globalValues/article/TWO_IMAGES_WITH_TEXT"
import twoImagesWithTextHandler from "./twoImagesWithTextHandler"
import IMAGE_COLUMN_WITH_TEXT from "../../slate/globalValues/article/IMAGE_COLUMN_WITH_TEXT"
import imageColumnWithTextHandler from "./imageColumnWithTextHandler"
import META from "../../../types/utils/packageComponents/META"
import metaHandler from "./unprinted/metaHandler"
import META_OPENGRAPH from "../../../types/utils/packageComponents/META_OPENGRAPH"
import metaOpenGraphHandler from "./unprinted/metaOpenGraphHandler"
import META_TWITTER from "../../../types/utils/packageComponents/META_TWITTER"
import metaTwitterHandler from "./unprinted/metaTwitterHandler"
import MICRO_META_ARTICLE from "../../../types/utils/packageComponents/MICRO_META_ARTICLE"
import microMetaArticleHandler from "./unprinted/microMetaArticleHandler"
import BGTitle from "../../../types/utils/packageComponents/BGTitle"
import bgTitleHandler from "./common/bgTitleHandler"

const handlers: NodeHandlersMap = {
  [ARTICLE_TEXT]: articleTextHandler,
  [ARTICLE_YOUTUBE]: articleYoutubeHandler,
  [CODE]: codeHandler,
  [CODE_SNIPPET]: codeSnippetHandler,
  [GRAY_BLOCK_WITH_TEXT]: grayBlockWithTextHandler,
  [IMAGE_CAROUSEL]: imageCarouselHandler,
  [IMAGE_COLUMN_WITH_TEXT]: imageColumnWithTextHandler,
  [IMAGE_WITH_SIZE]: imageWithSizeHandler,
  [QUOTE]: quoteHandler,
  [SEPARATOR]: separatorHandler,
  [TEXT_WITH_GREEN_LINE]: textWithGreenLineHandler,
  [TWO_IMAGE_WITH_TEXT]: twoImagesWithTextHandler,
  [META]: metaHandler,
  [META_OPENGRAPH]: metaOpenGraphHandler,
  [META_TWITTER]: metaTwitterHandler,
  [MICRO_META_ARTICLE]: microMetaArticleHandler,
  [BGTitle]: bgTitleHandler,
}

export default handlers
