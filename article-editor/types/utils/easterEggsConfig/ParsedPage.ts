import IStringJson from "../contentful/IStringJson"

export type ParsedPageComponentProps = {
  type: string
  [key: string]: string | NestedMap | NestedMap[] | string[]
}

type NestedMap = {
  [key: string]: string | NestedMap | IStringJson[] | NestedNestedMap[] | number
}

type NestedNestedMap = {
  [key: string]: (string | IStringJson)[] | string
}

export type ParsedPage = {
  slug: string
  componentsProps: ParsedPageComponentProps[]
}
