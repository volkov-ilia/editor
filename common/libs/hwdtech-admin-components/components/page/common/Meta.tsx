import React from "react"
import Head from "next/head"
import { NextSeo } from "next-seo"
import { checkStringNotUndefined, checkStringSize } from "../../../utils/checkString"
import { useAmp } from "next/amp"
import { getAmpUrl, getNonAmpUrl } from "../../../utils/ampUrls"
import MetaProps from "../../../others/types/MetaProps"

export const Meta: React.FC<MetaProps> = ({ description, title, uri, keywords, isNoIndex, withAmp = true }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpMeta description={description} title={title} uri={uri} keywords={keywords} isNoIndex={isNoIndex} />
  ) : (
    <NoAmpMeta
      description={description}
      title={title}
      uri={uri}
      keywords={keywords}
      isNoIndex={isNoIndex}
      withAmp={withAmp}
    />
  )
}

export const AmpMeta: React.FC<Omit<MetaProps, "withAmp">> = ({ description, title, uri, keywords, isNoIndex }) => (
  <>
    <NextSeo
      title={checkStringSize(checkStringNotUndefined(title, "title"))}
      description={checkStringSize(checkStringNotUndefined(description, "description"))}
      noindex={isNoIndex}
      nofollow={isNoIndex}
      additionalMetaTags={[
        {
          name: "theme-color",
          content: "#10ac84",
        },
      ]}
      canonical={getNonAmpUrl(uri)}
    />
    <Head>
      <meta name="keywords" content={keywords} />
    </Head>
  </>
)

export const NoAmpMeta: React.FC<MetaProps> = ({ description, title, uri, keywords, isNoIndex, withAmp }) => (
  <>
    <NextSeo
      title={checkStringSize(checkStringNotUndefined(title, "title"))}
      description={checkStringSize(checkStringNotUndefined(description, "description"))}
      noindex={isNoIndex}
      nofollow={isNoIndex}
      additionalMetaTags={[
        {
          name: "theme-color",
          content: "#10ac84",
        },
      ]}
      canonical={uri}
    />
    <Head>
      <meta name="keywords" content={keywords} />
      {withAmp && <link rel="amphtml" href={getAmpUrl(uri)} />}
    </Head>
  </>
)
