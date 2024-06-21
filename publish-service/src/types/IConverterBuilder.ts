import { NodeHandler } from "./NodeHandler"
import Vk from "./Vk"

export default interface IConverterBuilder {
  ArticleTextHandler: NodeHandler
  GrayBlockWithTextHandler: NodeHandler
  ImageCarouselHandler: NodeHandler
  TwoImagesWithTextHandler: NodeHandler
  TextWithGreenLineHandler: NodeHandler
  SeparatorHandler: NodeHandler
  ImageColumnWithTextHandler: NodeHandler
  ArticleYoutubeHandler: NodeHandler
  QuoteHandler: NodeHandler
  CodeSnippetHandler: NodeHandler
  ImageWithSizeHandler: NodeHandler
  CodeHandler: NodeHandler
  BGTitleHandler?: NodeHandler
  get getResult(): Vk.ArticleConverted
  reset(): void
}
