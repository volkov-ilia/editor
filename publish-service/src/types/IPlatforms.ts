import Content from "../../../common/types/Content"
import Article = Content.Article

export default interface IPlatforms {
  convert(article: Article)
}
