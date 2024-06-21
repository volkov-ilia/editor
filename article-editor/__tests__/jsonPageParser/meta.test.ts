import { test } from "@jest/globals"
import { getMetaPost } from "../../utils/meta/getMetaPost"
import MicroMetaArticlePreparedType from "../../types/utils/jsonPageGenerator/MicroMetaArticlePreparedType"

test(`microMetaArticleHandler with path`, async () => {
  const metaComponentProps: MicroMetaArticlePreparedType = {
    title: "title",
    description: "description",
    authors: "O J, P M, A.S., Oops",
    publicationDate: "Tue Dec 28 2021",
    modifiedDate: "Wed Dec 29 2021",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    ratingValue: "5",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "5",
    path: "path",
    slug: "slug",
  }
  const result = getMetaPost(metaComponentProps)
  const expected = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: "https://hwdtech.ru/path/slug",
    headline: "title",
    description: "description",
    author: [
      {
        "@type": "Person",
        name: "O J",
      },
      {
        "@type": "Person",
        name: "P M",
      },
      {
        "@type": "Person",
        name: "A.S.",
      },
      {
        "@type": "Person",
        name: "Oops",
      },
    ],
    datePublished: "Tue Dec 28 2021",
    dateModified: "Wed Dec 29 2021",
    image: {
      "@type": "imageObject",
      url: "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
      height: "200",
      width: "400",
    },
    publisher: {
      "@type": "Organization",
      name: "HWdTech",
      logo: {
        "@type": "imageObject",
        url: "https://hwdtech.ru/logo.png",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      ratingCount: "12",
      bestRating: "5",
      worstRating: "5",
    },
  }
  expect(result).toEqual(expected)
})

test(`microMetaArticleHandler NO path`, async () => {
  const metaComponentProps: MicroMetaArticlePreparedType = {
    title: "title",
    description: "description",
    authors: "O J, P M, A.S., Oops",
    publicationDate: "Tue Dec 28 2021",
    modifiedDate: "Wed Dec 29 2021",
    previewImage:
      "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
    ratingValue: "5",
    reviewCount: "12",
    bestRating: "5",
    worstRating: "5",
    slug: "slug",
  }
  const result = getMetaPost(metaComponentProps)
  const expected = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: "https://hwdtech.ru/slug",
    headline: "title",
    description: "description",
    author: [
      {
        "@type": "Person",
        name: "O J",
      },
      {
        "@type": "Person",
        name: "P M",
      },
      {
        "@type": "Person",
        name: "A.S.",
      },
      {
        "@type": "Person",
        name: "Oops",
      },
    ],
    datePublished: "Tue Dec 28 2021",
    dateModified: "Wed Dec 29 2021",
    image: {
      "@type": "imageObject",
      url: "https://images.ctfassets.net/mue5t0ky2rh8/6S0E5vON4AlNiv8Lgeqy0v/a90bf9691cffef0d09fe28643ec38db8/practice-2021-06.jpg",
      height: "200",
      width: "400",
    },
    publisher: {
      "@type": "Organization",
      name: "HWdTech",
      logo: {
        "@type": "imageObject",
        url: "https://hwdtech.ru/logo.png",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      ratingCount: "12",
      bestRating: "5",
      worstRating: "5",
    },
  }
  expect(result).toEqual(expected)
})
