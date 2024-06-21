import ARTICLE_TEXT from "../../slate/globalValues/article/ARTICLE_TEXT"
import ArticleTextHandler from "./article/ArticleTextHandler"
import ARTICLE_YOUTUBE from "../../slate/globalValues/article/ARTICLE_YOUTUBE"
import ArticleYoutubeHandler from "./article/ArticleYoutubeHandler"
import CODE_SNIPPET from "../../slate/globalValues/article/CODE_SNIPPET"
import CodeSnippetHandler from "./article/CodeSnippetHandler"
import GRAY_BLOCK_WITH_TEXT from "../../slate/globalValues/article/GRAY_BLOCK_WITH_TEXT"
import GrayBlockWithTextHandler from "./article/GrayBlockWithTextHandler"
import IMAGE_CAROUSEL from "../../slate/globalValues/article/IMAGE_CAROUSEL"
import ImageCarouselHandler from "./article/ImageCarouselHandler"
import IMAGE_COLUMN_WITH_TEXT from "../../slate/globalValues/article/IMAGE_COLUMN_WITH_TEXT"
import ImageColumnWithTextHandler from "./article/ImageColumnWithTextHandler"
import IMAGE_WITH_SIZE from "../../slate/globalValues/article/IMAGE_WITH_SIZE"
import ImageWithSizeHandler from "./article/ImageWithSizeHandler"
import QUOTE from "../../slate/globalValues/article/QUOTE"
import QuoteHandler from "./article/QuoteHandler"
import SEPARATOR from "../../slate/globalValues/article/SEPARATOR"
import SeparatorHandler from "./article/SeparatorHandler"
import TEXT_WITH_GREEN_LINE from "../../slate/globalValues/article/TEXT_WITH_GREEN_LINE"
import TextWithGreenLineHandler from "./article/TextWithGreenLineHandler"
import TWO_IMAGE_WITH_TEXT from "../../slate/globalValues/article/TWO_IMAGES_WITH_TEXT"
import TwoImageWithTextHandler from "./article/TwoImageWithTextHandler"
import { ComponentHandlerFC } from "../../../types/utils/jsonPageBuilder/ComponentHandler"
import MetaHandler from "./common/MetaHandler"
import MetaOpenGraphHandler from "./common/MetaOpenGraphHandler"
import MetaTwitterHandler from "./common/MetaTwitterHandler"
import CODE from "../../slate/globalValues/article/CODE"
import CodeHandler from "./article/CodeHandler"
import META from "../../../types/utils/packageComponents/META"
import META_OPENGRAPH from "../../../types/utils/packageComponents/META_OPENGRAPH"
import META_TWITTER from "../../../types/utils/packageComponents/META_TWITTER"
import MICRO_META_ARTICLE from "../../../types/utils/packageComponents/MICRO_META_ARTICLE"
import MicroMetaArticleHandler from "./article/MicroMetaArticleHandler"
import BGTitle from "../../../types/utils/packageComponents/BGTitle"
import BGTitleHandler from "./common/BGTitleHandler"

const componentsHandlers: { [key: string]: ComponentHandlerFC } = {
  [ARTICLE_TEXT]: ArticleTextHandler,
  [ARTICLE_YOUTUBE]: ArticleYoutubeHandler,
  [CODE_SNIPPET]: CodeSnippetHandler,
  [GRAY_BLOCK_WITH_TEXT]: GrayBlockWithTextHandler,
  [IMAGE_CAROUSEL]: ImageCarouselHandler,
  [IMAGE_COLUMN_WITH_TEXT]: ImageColumnWithTextHandler,
  [IMAGE_WITH_SIZE]: ImageWithSizeHandler,
  [QUOTE]: QuoteHandler,
  [SEPARATOR]: SeparatorHandler,
  [TEXT_WITH_GREEN_LINE]: TextWithGreenLineHandler,
  [TWO_IMAGE_WITH_TEXT]: TwoImageWithTextHandler,
  [CODE]: CodeHandler,
  [META]: MetaHandler,
  [META_OPENGRAPH]: MetaOpenGraphHandler,
  [META_TWITTER]: MetaTwitterHandler,
  [MICRO_META_ARTICLE]: MicroMetaArticleHandler,
  [BGTitle]: BGTitleHandler,
}

export default componentsHandlers
