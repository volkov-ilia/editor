import IStringJson from "../contentful/IStringJson"

type JsonPage = {
  [key: string]: JsonPageValue
  components: string[]
}

type JsonPageValue =
  | ComponentJsonPage
  | ComponentRule[]
  | ComponentArgValue
  | string[]
  | number
  | TextJsonPage
  | { [key: string]: string | number }[]
  | EffectType
  | PrimaryButtonJsonPage
  | LabelJsonPage

export type EffectType = {
  name: string
  props: {
    src: string
  }
}

export type PrimaryButtonJsonPage = {
  text: string
  action?: string
  actionArgs?: IStringJson
  title?: string
  linkMeta?: LinkMetaJsonPage
}

export type LinkMetaJsonPage = {
  href: string
  linkTitle: string
}

export type LabelJsonPage = {
  usualText: string
  primaryText: string
  primaryLinkMeta?: LinkMetaJsonPage
  usualLinkMeta?: LinkMetaJsonPage
}

type TextJsonPage = {
  type?: string
  text:
    | string
    | (
        | TextJsonPage
        | string
        | {
            type: string
            text: (string | { [key: string]: string | number })[]
          }
      )[]
  [key: string]:
    | string
    | undefined
    | (
        | TextJsonPage
        | string
        | {
            type: string
            text: (string | { [key: string]: string | number })[]
          }
      )[]
}

export type ComponentJsonPage = {
  type: string
  rules: ComponentRule[]
}
export type ComponentArgValue = string | { [key: string]: string | number }

export type ComponentRule = {
  name: string
  function: string
  args: CommonArgs
}

export type IdentityArgs = string[]
export type ContainerArgs = ComponentRule[]
export type CommonArgs = IdentityArgs | ContainerArgs

export type IdentityRule = Omit<ComponentRule, "args"> & {
  args: IdentityArgs
}
export type ContainerRule = Omit<ComponentRule, "args"> & {
  args: ContainerArgs
}

export default JsonPage
