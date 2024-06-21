import Head from "next/head"
import React from "react"
import MicroMetaArticleType from "../../types/utils/jsonPageBuilder/MicroMetaArticleType"

export const MicroMetaArticle = ({ data }: { data: MicroMetaArticleType }) => (
  <Head>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  </Head>
)
