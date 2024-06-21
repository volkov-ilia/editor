import React, { ReactElement } from "react"
import { ComponentsPropsItem, NestedMap, NestedNestedMap, ParsedPageComponentProps } from "./ParsedPage"
import ListComponentsEasterEggs from "./ListComponentsEasterEggs"
import TextJson from "./TextJson"

type ComponentHandlerProps = {
  component: ParsedPageComponentProps
  listComponentsEasterEggs?: ListComponentsEasterEggs
  isAmp?: boolean
  absoluteURL?: string
  isNoIndex?: boolean
}

type NestedComponentHandlerProps = Omit<ComponentHandlerProps, "component"> & {
  parentComponentName: string
  getText?: boolean
  component: NestedMap
}
type ListItemComponentHandlerProps = Omit<ComponentHandlerProps, "component"> & {
  parentComponentName: string
  getText?: boolean
  component: { item: NestedNestedMap; isOrdered?: boolean }
}

export type ListItemComponentType = { item: NestedNestedMap }

export type ComponentHandlerFC = React.FC<ComponentHandlerProps>
export type NestedComponentHandlerFC = React.FC<NestedComponentHandlerProps>
export type ListItemComponentHandlerFC = React.FC<ListItemComponentHandlerProps>

export type ComponentHandlerFunc = ({
  component,
  listComponentsEasterEggs,
  isAmp,
}:
  | ComponentHandlerProps
  | (Omit<ComponentHandlerProps, "component"> & {
      component: ParsedPageComponentProps | string
    })) => string | ComponentsPropsItem | ReactElement | null
export type NestedComponentHandlerFunc = ({
  component,
  listComponentsEasterEggs,
  isAmp,
  parentComponentName,
}: NestedComponentHandlerProps) => TextJson | ReactElement | { text: ReactElement; header: string } | string | null
