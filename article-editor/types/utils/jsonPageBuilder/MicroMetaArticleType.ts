type MicroMetaArticleType = {
  "@context": string
  "@type": string
  mainEntityOfPage: string
  headline: string
  description: string
  author?: { "@type": string; name: string } | { "@type": string; name: string }[]
  datePublished: string
  dateModified: string
  image: {
    "@type": string
    url: string
    height: string
    width: string
  }
  publisher: {
    "@type": string
    name: string
    logo: {
      "@type": string
      url: string
    }
  }
  reviewRating: {
    "@type": "Rating"
    ratingValue?: string
    ratingCount?: string
    bestRating?: string
    worstRating?: string
  }
}

export default MicroMetaArticleType
