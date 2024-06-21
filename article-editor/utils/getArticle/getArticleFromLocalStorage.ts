export const getArticleFromLocalStorage = (articleSource: string) => {
  return window.localStorage.getItem(articleSource)
}
