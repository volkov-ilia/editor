import ChildrenHandlerReturnType from "./ChildrenHandlerReturnType"
import { Descendant } from "slate"
import { ValueMetaCommon } from "./RulesTypes"
import { ComponentJsonPage, ComponentRule } from "../jsonPageBuilder/JsonPage"
import { PageFieldsTypes } from "../../Slate/Components/PageFieldsTypes"

type NodeHandlerProps = {
  component: NodeHandlerComponentProp
}

export type NodeHandlerComponentProp = Descendant | PageFieldsTypes

export type ComponentHandlerResultField =
  | {
      [key: string]: ValueMetaCommon | ValueMetaCommon[] | ComponentRule[]
    }
  | string

export type ComponentHandlerResult = {
  [key: string]:
    | string
    | { [key: string]: ComponentHandlerResultField }
    | ComponentHandlerResultField
    | ComponentRule[]
    | ComponentJsonPage
  name: string
  component: ComponentJsonPage
  fields: ComponentHandlerResultField | { [key: string]: ComponentHandlerResultField }
}

export type EffectSettings = { name: string; props: { src: string } }
export type ViewSettingsFields = { theme?: string; effect?: EffectSettings }
export type ViewSettingsHandlerFunc = (props: { component?: PageFieldsTypes }) => ViewSettingsFields

export type NodeHandler = (props: NodeHandlerProps) => string | ComponentHandlerResult | void

export type NestedNestedNodeHandler = string | { [key: string]: string }

export type NestedNodeHandlerProps = {
  component: Descendant
  parentComponentName: string
}
export type NestedNodeHandler = (
  props: NestedNodeHandlerProps
) => ChildrenHandlerReturnType | ChildrenHandlerReturnType[]

export type SlateTextHandler = (
  component: Descendant
) => NestedNestedNodeHandler | { text: ChildrenHandlerReturnType[] | ChildrenHandlerReturnType } | void

export type FormattedTextHandler = (component: Descendant) => ChildrenHandlerReturnType

export type NodeHandlersMap = {
  [key: string]: NodeHandler
}
