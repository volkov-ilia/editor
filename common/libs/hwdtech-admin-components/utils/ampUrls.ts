export const getAmpUrl = (absoluteUrl: string) => {
  return `${absoluteUrl}?amp=1`
}

export const getNonAmpUrl = (absoluteUrl: string) => {
  return absoluteUrl.replace("?amp=1", "")
}
