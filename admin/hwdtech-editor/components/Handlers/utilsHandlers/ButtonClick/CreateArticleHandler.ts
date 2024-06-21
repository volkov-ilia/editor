import router from "next/router"

export const createArticleHandler = () => {
  router.push("article-editor/new")
}
