import Vk from "../../types/Vk"
import IConverterBuilder from "../../types/IConverterBuilder"
import { NodeHandlerProps } from "../../types/NodeHandler"
import { NestedHandlers } from "./dependencies/NestedMethods/NestedHandlers"

class VkBuilder implements IConverterBuilder {
  private _result: Vk.ArticleConverted

  constructor() {
    this.convertChildren = this.convertChildren.bind(this)
    this.ArticleTextHandler = this.ArticleTextHandler.bind(this)
    this.ArticleYoutubeHandler = this.ArticleYoutubeHandler.bind(this)
    this.CodeHandler = this.CodeHandler.bind(this)
    this.GrayBlockWithTextHandler = this.GrayBlockWithTextHandler.bind(this)
    this.ImageColumnWithTextHandler = this.ImageColumnWithTextHandler.bind(this)
    this.ImageCarouselHandler = this.ImageCarouselHandler.bind(this)
    this.ImageWithSizeHandler = this.ImageWithSizeHandler.bind(this)
    this.QuoteHandler = this.QuoteHandler.bind(this)
    this.TextWithGreenLineHandler = this.TextWithGreenLineHandler.bind(this)
    this.TwoImagesWithTextHandler = this.TwoImagesWithTextHandler.bind(this)
    this.SeparatorHandler = this.SeparatorHandler.bind(this)
    this.CodeSnippetHandler = this.CodeSnippetHandler.bind(this)
    this._result = {
      text: new Array<string>(),
      imgs: new Array<string>(),
    }
  }

  private convertChildren(element: Vk.slateElement, state: Vk.ArticleConverted): void {
    element.children?.forEach((child) => {
      NestedHandlers.converters?.[child.type]?.(child, state)
    })
  }

  ArticleTextHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  ArticleYoutubeHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  CodeHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  CodeSnippetHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  GrayBlockWithTextHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  ImageCarouselHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  ImageColumnWithTextHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  ImageWithSizeHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  QuoteHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  SeparatorHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  TextWithGreenLineHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  TwoImagesWithTextHandler(props: NodeHandlerProps): void {
    this.convertChildren(props, this._result)
  }

  reset() {
    this._result = {
      text: new Array<string>(),
      imgs: new Array<string>(),
    }
  }

  get getResult(): Vk.ArticleConverted {
    return this._result
  }
}

export default new VkBuilder()
