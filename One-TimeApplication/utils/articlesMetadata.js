import forEach from "lodash/forEach"
import get from "lodash/get"
import fs from "fs"

const checkImgSrc = (imgSrc) => {
  return get(imgSrc, "fields.file.url") ? get(imgSrc, "fields.file.url") : ""
}

const resourcesMap = {
  en: "contentful-en",
  ru: "contentful-ru",
}

export const articlesMetadata = (articles, fileName, locale) => {
  let result = []

  forEach(articles, (article) => {
    const title = get(article, "fields.title")
    let tags = []
    forEach(get(article, "fields.tags"), (tag) => {
      tags.push(`${get(tag, "fields.name")}`)
    })
    const imgSrc = checkImgSrc(get(article, "fields.preview"))
    const history = []
    history.push({ status: "created", data: get(article, "sys.createdAt") })
    history.push({ status: "updated", data: get(article, "sys.updatedAt") })
    const description = get(article, "fields.description") ? get(article, "fields.description") : ""
    const resources = []
    resources.push({
      source: get(resourcesMap, locale),
      slug: get(article, "fields.slug"),
    })
    if (title) {
      result.push({
        title,
        tags,
        imgSrc,
        description,
        note: "",
        version: 1,
        history,
        resources,
      })
    }
  })
  fs.writeFileSync(fileName, JSON.stringify(result))

  return result
}
