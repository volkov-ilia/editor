import WrappedCode from "./WrappedCode"
import WrappedCodeSnippet from "./WrappedCodeSnippet"
import WrappedGrayBlockWithText from "./WrappedGrayBlockWithText"
import WrappedImageCarousel from "./WrappedImageCarousel"
import WrappedImageColumnWithText from "./WrappedImageColumnWithText"
import WrappedImageWithSize from "./WrappedImageWithSize"
import NestedOrderedList from "./nested/NestedOrderedList"
import WrappedArticleText from "./WrappedArticleText"
import WrappedQuote from "./WrappedQuote"
import WrappedSeparator from "./WrappedSeparator"
import WrappedTextWithGreenLine from "./WrappedTextWithGreenLine"
import WrappedTwoImageWithText from "./WrappedTwoImageWithText"
import NestedUnorderedList from "./nested/NestedUnorderedList"
import WrappedYoutube from "./WrappedYoutube"
import NestedImageCarouselItem from "./nested/NestedImageCarouselItem"
import NestedImage from "./nested/NestedImage"
import UnwrappedDefault from "./UnwrappedDefault"
import NestedAddImage from "./nested/NestedAddImage"
import NestedListItem from "./nested/NestedListItem"
import NestedUnorderedListItem from "./nested/NestedUnorderedListItem"
import ARTICLE_TEXT from "../../../../utils/slate/globalValues/article/ARTICLE_TEXT"
import CODE from "../../../../utils/slate/globalValues/article/CODE"
import CODE_SNIPPET from "../../../../utils/slate/globalValues/article/CODE_SNIPPET"
import GRAY_BLOCK_WITH_TEXT from "../../../../utils/slate/globalValues/article/GRAY_BLOCK_WITH_TEXT"
import IMAGE_CAROUSEL from "../../../../utils/slate/globalValues/article/IMAGE_CAROUSEL"
import IMAGE_COLUMN_WITH_TEXT from "../../../../utils/slate/globalValues/article/IMAGE_COLUMN_WITH_TEXT"
import IMAGE_WITH_SIZE from "../../../../utils/slate/globalValues/article/IMAGE_WITH_SIZE"
import ORDERED_LIST from "../../../../utils/slate/globalValues/article/nestedTypes/ORDERED_LIST"
import QUOTE from "../../../../utils/slate/globalValues/article/QUOTE"
import SEPARATOR from "../../../../utils/slate/globalValues/article/SEPARATOR"
import TEXT_WITH_GREEN_LINE from "../../../../utils/slate/globalValues/article/TEXT_WITH_GREEN_LINE"
import TWO_IMAGE_WITH_TEXT from "../../../../utils/slate/globalValues/article/TWO_IMAGES_WITH_TEXT"
import UNORDERED_LIST from "../../../../utils/slate/globalValues/article/nestedTypes/UNORDERED_LIST"
import YOUTUBE from "../../../../utils/slate/globalValues/article/ARTICLE_YOUTUBE"
import IMAGE_CAROUSEL_ITEM from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE_CAROUSEL_ITEM"
import IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/IMAGE"
import ADD_IMAGE from "../../../../utils/slate/globalValues/article/nestedTypes/ADD_IMAGE"
import LIST_ITEM from "../../../../utils/slate/globalValues/article/nestedTypes/LIST_ITEM"
import UNORDERED_LIST_ITEM from "../../../../utils/slate/globalValues/article/nestedTypes/UNORDERED_LIST_ITEM"
import H2 from "../../../../utils/slate/globalValues/article/nestedTypes/SECOND_HEADER"
import NestedSecondHeader from "./nested/NestedSecondHeader"
import H3 from "../../../../utils/slate/globalValues/article/nestedTypes/THIRD_HEADER"
import NestedThirdHeader from "./nested/NestedThirdHeader"
import SELECTOR from "../../../../utils/slate/globalValues/article/nestedTypes/SELECTOR"
import NestedSelector from "./nested/NestedSelector"
import LINK_IN_TEXT from "../../../../utils/slate/globalValues/article/nestedTypes/LINK_IN_TEXT"
import NestedLinkInText from "./nested/NestedLinkInText"
import TEXT_CENTER from "../../../../utils/slate/globalValues/leafs/TEXT_CENTER"
import NestedTextCenter from "./nested/NestedTextCenter"
import TEXT_RIGHT from "../../../../utils/slate/globalValues/leafs/TEXT_RIGHT"
import NestedTextRight from "./nested/NestedTextRight"
import VOID from "../../../../utils/slate/globalValues/article/nestedTypes/VOID"
import VoidElement from "./VoidElement"
import BaseProps from "../../../../types/BaseProps"
import WrappedComponentsProps from "../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import React from "react"

const map: {
  [key: string]: React.FC<BaseProps> | React.FC<WrappedComponentsProps>
} = {
  default: UnwrappedDefault,
  [ARTICLE_TEXT]: WrappedArticleText,
  [CODE]: WrappedCode,
  [CODE_SNIPPET]: WrappedCodeSnippet,
  [GRAY_BLOCK_WITH_TEXT]: WrappedGrayBlockWithText,
  [IMAGE_CAROUSEL]: WrappedImageCarousel,
  [IMAGE_COLUMN_WITH_TEXT]: WrappedImageColumnWithText,
  [IMAGE_WITH_SIZE]: WrappedImageWithSize,
  [QUOTE]: WrappedQuote,
  [SEPARATOR]: WrappedSeparator,
  [TEXT_WITH_GREEN_LINE]: WrappedTextWithGreenLine,
  [TWO_IMAGE_WITH_TEXT]: WrappedTwoImageWithText,
  [YOUTUBE]: WrappedYoutube,
  /* nested types */
  [UNORDERED_LIST]: NestedUnorderedList,
  [IMAGE_CAROUSEL_ITEM]: NestedImageCarouselItem,
  [IMAGE]: NestedImage,
  [ADD_IMAGE]: NestedAddImage,
  [LIST_ITEM]: NestedListItem,
  [ORDERED_LIST]: NestedOrderedList,
  [UNORDERED_LIST_ITEM]: NestedUnorderedListItem,
  [H2]: NestedSecondHeader,
  [H3]: NestedThirdHeader,
  [SELECTOR]: NestedSelector,
  [LINK_IN_TEXT]: NestedLinkInText,
  [TEXT_CENTER]: NestedTextCenter,
  [TEXT_RIGHT]: NestedTextRight,
  [VOID]: VoidElement,
}

export default map
