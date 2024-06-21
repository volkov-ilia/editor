import EasterEggsComponentConfig from "./EasterEggsComponentConfig"
import { EasterEggsConfigItem } from "./EasterEggsConfigItem"
import { ParsedPageComponentProps } from "./ParsedPage"
import EasterEggImages from "./EasterEggImages"
import SizeEasterEgg from "./SizeEasterEgg"

export type ComponentEasterEggsListValues = {
  [key: string]: EasterEggsComponentConfig[]
}

export type ComponentEasterEggsSimple = {
  [key: string]: EasterEggsComponentConfig[]
}

export type ComponentEasterEggsMap = {
  [key: string]: {
    dataType: string
    [key: string]: EasterEggsComponentConfig[] | string
  }
}

export type ComponentEasterEggsPeerMap = {
  [key: string]: {
    dataType: string
    [key: string]: ComponentEasterEggsListValues | string
  }
}

export type DataHandlerProps<B> = {
  item: EasterEggsConfigItem
  componentEasterEggs: B
  component: ParsedPageComponentProps
  icons: EasterEggImages
  iconColors: string[]
  sizeEasterEgg: SizeEasterEgg
}

export type ConfigResult = { isCreated: boolean; isCounted: boolean }

export type EasterEggsConfigSimpleMapFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}: DataHandlerProps<ComponentEasterEggsMap>) => ConfigResult

export type EasterEggsConfigChildrenListFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}: DataHandlerProps<ComponentEasterEggsMap>) => ConfigResult

export type EasterEggsConfigChildrenMapFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}: DataHandlerProps<ComponentEasterEggsPeerMap>) => ConfigResult

export type EasterEggsConfigSimpleItemFunc = ({
  item,
  componentEasterEggs,
  component,
  icons,
  iconColors,
  sizeEasterEgg,
}: DataHandlerProps<ComponentEasterEggsSimple>) => ConfigResult

export type CommonComponentEasterEggs = ComponentEasterEggsSimple & ComponentEasterEggsPeerMap & ComponentEasterEggsMap

export type DataHandlerMapProps = {
  [key: string]:
    | EasterEggsConfigSimpleMapFunc
    | EasterEggsConfigChildrenListFunc
    | EasterEggsConfigChildrenMapFunc
    | EasterEggsConfigSimpleItemFunc
}
