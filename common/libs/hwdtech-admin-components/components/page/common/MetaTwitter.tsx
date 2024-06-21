import { protocolRecover } from "../../../utils/urlFormatter"
import { checkStringNotUndefined, checkStringSize } from "../../../utils/checkString"
import { NextSeo } from "next-seo"
import { getHost } from "../../../utils/urlParser"
import React from "react"
import MetaTwitterProps from "../../../others/types/MetaTwitterProps"
import { MetaTag } from "next-seo/lib/types"

export const MetaTwitter: React.FC<MetaTwitterProps> = ({ title, description, imageUrl, uri, isNoIndex }) => {
  const additionalMetaTags: MetaTag[] = []
  if (description)
    additionalMetaTags.push({
      name: "twitter:description",
      content: protocolRecover(checkStringSize(checkStringNotUndefined(description, "description"))),
    })
  if (title)
    additionalMetaTags.push({
      name: "twitter:title",
      content: protocolRecover(checkStringSize(checkStringNotUndefined(title, "title"))),
    })
  if (imageUrl)
    additionalMetaTags.push({
      name: "twitter:image",
      content: protocolRecover(checkStringNotUndefined(imageUrl, "imageUrl")),
    })

  return (
    <NextSeo
      twitter={{
        handle: "@WebHWdTech",
        site: getHost(uri),
        cardType: "summary_large_image",
      }}
      noindex={isNoIndex}
      nofollow={isNoIndex}
      additionalMetaTags={additionalMetaTags}
    />
  )
}
