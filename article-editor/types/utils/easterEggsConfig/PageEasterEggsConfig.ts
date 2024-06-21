import EasterEggsComponentConfig from "./EasterEggsComponentConfig"

export type PageEasterEggsConfig = {
  pageTotal: number
  pageUncountedTotal: number
  [key: string]: PageEasterEggsConfigItem | number
}

export type PageEasterEggsConfigItem = {
  componentTotal: number
  type: string
  [key: string]: EasterEggsComponentConfig[] | string | number
}
