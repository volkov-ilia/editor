export const getHost = (uri: string) => (uri ? uri.split("/")[2] : "")

export const getPath = () => (typeof window !== "undefined" ? window.location.pathname : null)

export const getFirstPath = () => {
  if (typeof window === "undefined") {
    return null
  }
  const paths = window.location.pathname.split("/")

  return paths.length > 1 ? paths[1] : paths[0]
}
