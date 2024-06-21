import { EasterEggsMapItem } from "./ComponentEasterEggsMapSimple"
import { EasterEggsConfigItem } from "./EasterEggsConfigItem"
import { ParsedPageComponentProps } from "./ParsedPage"

export type LocalMaxProps = {
  config: EasterEggsConfigItem
  component: ParsedPageComponentProps
}

// eslint-disable-next-line no-empty-pattern
export type LocalMaxFun = ({}: LocalMaxProps) => number

export type GetMaxProps = {
  easterEggsConfigKeys: string[]
  componentEasterEggsMap: EasterEggsMapItem
  component: ParsedPageComponentProps
}

// eslint-disable-next-line no-empty-pattern
export type GetMaxFunc = ({}: GetMaxProps) => number
