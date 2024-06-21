import { EasterEggsConfigSimpleItem } from "./EasterEggsConfigItem"

export type ComponentEasterEggsMapSimple = {
  [key: string]: EasterEggsMapItem
}

export type EasterEggsMapItem = {
  [key: string]: EasterEggsConfigSimpleItem
}
