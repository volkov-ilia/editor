import split from "lodash/split"

export const getAbsoluteUri = (relativePath: string) => {
  const noQuery = split(relativePath, "?", 1)[0]
  return `${getSiteName()}${noQuery}`
}

export const getSiteName = () => {
  return process.env.NODE_ENV === "development" ||
    (process.env.NEXT_PUBLIC_VERCEL_URL as string).indexOf("localhost") !== -1
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}

export const getSiteNameFromAbsoluteURL = (absoluteURL: string) => {
  const siteName = absoluteURL.match(/^http(s)?:\/\/[^\\/]+\//)
  return siteName !== null ? siteName[0] : ""
}
