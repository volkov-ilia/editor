import { NextSeo } from "next-seo"
import { checkStringNotUndefined, checkStringSize } from "../../../utils/checkString"
import { protocolRecover } from "../../../utils/urlFormatter"
import React from "react"
import MetaOpenGraphProps from "../../../others/types/MetaOpenGraphProps"

export const MetaOpenGraph: React.FC<MetaOpenGraphProps> = ({
  title,
  description,
  imageUrl,
  siteName,
  uri,
  type,
  isNoIndex,
}) => (
  <NextSeo
    openGraph={{
      type: type ? type : "website",
      url: uri,
      title: checkStringSize(checkStringNotUndefined(title, "title")),
      description: checkStringSize(checkStringNotUndefined(description, "description")),
      site_name: checkStringNotUndefined(siteName, "siteName"),
      images: [
        {
          url: protocolRecover(checkStringNotUndefined(imageUrl, "imageUrl")),
          width: 512,
          height: 512,
          alt: "OG alt for logo",
        },
      ],
    }}
    noindex={isNoIndex}
    nofollow={isNoIndex}
  />
)
