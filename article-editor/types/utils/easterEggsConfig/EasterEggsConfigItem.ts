import EasterEggsComponentConfig from "./EasterEggsComponentConfig"

export type EasterEggsConfigItem = {
  dataType: string
  key: string
  max: number
  isEmpty?: boolean
}

export type EasterEggsConfigSimpleItem = EasterEggsConfigItem & {
  easterEggs: EasterEggsComponentConfig[]
}

export type EasterEggsConfigChildrenList = EasterEggsConfigItem & {
  jsonChildrenKey: string[]
  easterEggs: EasterEggsComponentConfig[]
}

export type EasterEggsConfigChildrenMap = EasterEggsConfigItem & {
  jsonChildrenKey: string[]
  nested: { [key: string]: EasterEggsConfigItem }
}

export type EasterEggsConfigSimpleMap = EasterEggsConfigItem & {
  nested: { [key: string]: EasterEggsConfigItem }
}
