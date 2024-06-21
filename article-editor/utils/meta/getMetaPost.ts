import get from "lodash/get"
import map from "lodash/map"
import { getHostName } from "./getHostName"
import split from "lodash/split"
import MicroMetaArticlePreparedType from "../../types/utils/jsonPageGenerator/MicroMetaArticlePreparedType"
import { removeSpaceOnStartAndEnd } from "../jsonPageBuilder/titleFormatter"

const getAuthors = (authors?: string) => {
  const tempAuthors = split(authors, ",")

  if (tempAuthors) {
    const type = "Person"
    const result = map(tempAuthors, (author) => {
      return {
        "@type": type,
        name: removeSpaceOnStartAndEnd(author),
      }
    })
    return result.length === 1 ? result[0] : result
  }
}

export const getMetaPost = (microMetaComponent: MicroMetaArticlePreparedType) => {
  const authors = getAuthors(get(microMetaComponent, "authors"))
  const hostName = getHostName()
  const path = get(microMetaComponent, "path")
  const mainEntityOfPage = path ? `https://${hostName}/${path}` : `https://${hostName}`

  return {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: `${mainEntityOfPage}/${get(microMetaComponent, "slug")}`,
    headline: get(microMetaComponent, "title"),
    description: get(microMetaComponent, "description"),
    author: authors,
    datePublished: get(microMetaComponent, "publicationDate"),
    dateModified: get(microMetaComponent, "modifiedDate"),
    image: {
      "@type": "imageObject",
      url: get(microMetaComponent, "previewImage"),
      height: "200",
      width: "400",
    },
    publisher: {
      "@type": "Organization",
      name: "HWdTech",
      logo: {
        "@type": "imageObject",
        url: `https://${hostName}/logo.png`,
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: get(microMetaComponent, "ratingValue"),
      ratingCount: get(microMetaComponent, "reviewCount"),
      bestRating: get(microMetaComponent, "bestRating"),
      worstRating: get(microMetaComponent, "worstRating"),
    },
  }
}
