import indexOf from "lodash/indexOf"

export const getSiteName = () => {
  return process.env.NODE_ENV === "development" || indexOf(process.env.PUBLIC_URL, "localhost") !== -1
    ? `http://${process.env.PUBLIC_URL}`
    : `https://${process.env.PUBLIC_URL}`
}
