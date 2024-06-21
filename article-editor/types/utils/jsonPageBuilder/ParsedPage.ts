import IStringJson from "../contentful/IStringJson"

export type ParsedPageComponentProps = {
  type: string
  [key: string]: ComponentsPropsItem
}

export type ComponentsPropsItem = string | NestedMap | NestedMap[] | string[]
export type NestedComponentsPropsItem = string | NestedMap | IStringJson[] | NestedNestedMap[] | number

export type NestedMap = {
  [key: string]: NestedComponentsPropsItem | NestedComponentsPropsItem[]
}

export type NestedNestedMap = {
  [key: string]: NestedNestedMapChild
}

export type NestedNestedMapChild = (string | IStringJson)[] | string

export type ParsedPage = {
  slug: string
  componentsProps: ParsedPageComponentProps[]
}
