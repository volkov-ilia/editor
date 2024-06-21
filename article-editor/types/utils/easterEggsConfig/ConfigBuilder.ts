import EasterEggsComponentConfig from "./EasterEggsComponentConfig"
import { NestedComponentListEasterEggs } from "./ComponentListEasterEggs"
import {
  EasterEggsConfigChildrenList,
  EasterEggsConfigChildrenMap,
  EasterEggsConfigSimpleItem,
} from "./EasterEggsConfigItem"

export type ItemConfigBuilderMapProps = {
  [key: string]:
    | PeerChildrenListItemConfigBuilderFunc
    | PeerChildrenMapItemConfigBuilderFunc
    | SimpleItemItemConfigBuilderFunc
    | SimpleMapItemConfigBuilderFunc
}

export type PeerChildrenListItemConfigBuilderFunc = ({
  item,
  easterEggs,
}: {
  item: string
  easterEggs: EasterEggsComponentConfig[]
}) => EasterEggsConfigChildrenList

export type PeerChildrenMapItemConfigBuilderFunc = ({
  item,
  componentListsWithEasterEggs,
}: ConfigBuilderProps) => EasterEggsConfigChildrenMap | undefined

export type SimpleItemItemConfigBuilderFunc = ({
  item,
  easterEggs,
}: {
  item: string
  easterEggs: EasterEggsComponentConfig[]
}) => EasterEggsConfigSimpleItem

export type SimpleMapItemConfigBuilderFunc = ({
  item,
  componentListsWithEasterEggs,
}: ConfigBuilderProps) => EasterEggsConfigChildrenMap | undefined

type ConfigBuilderProps = {
  item: string
  easterEggs?: EasterEggsComponentConfig[]
  componentMapWithEasterEggs?: NestedComponentListEasterEggs[]
  componentListsWithEasterEggs?: NestedComponentListEasterEggs[]
}

export default ConfigBuilderProps
