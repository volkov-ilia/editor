import Content from "../../../common/types/Content"

export function compareArticles(
  lhs: Content.LocalStorageArticleType | undefined,
  rhs: Content.LocalStorageArticleType | undefined
) {
  return JSON.stringify(lhs) === JSON.stringify(rhs)
}
