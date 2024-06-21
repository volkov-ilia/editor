import split from "lodash/split"

export const getAbsoluteUri = (relativePath: string | null) => {
  const noQuery = split(relativePath, "?", 1)[0]
  return `${getSiteName()}${noQuery}`
}

export const getSiteName = () => {
  return process.env.NODE_ENV === "development" ||
    (process.env.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_URL.indexOf("localhost") !== -1)
    ? `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}
