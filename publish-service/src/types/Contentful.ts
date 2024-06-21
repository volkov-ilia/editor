import { CONTAINER, IDENTITY } from "../builders/Contentful/dependencies/ComponentJsonGenerator/FieldsNames"
import { SlateComponent } from "./SlateComponent"
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Contentful {
  export type NodeHandler = (props: NodeHandlerProps) => string | ComponentHandlerResult | void

  export type NodeHandlerProps = {
    type: string
    children: object[]
  }

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

  type ComponentHandlerResultField = { [key: string]: ValueMetaCommon | ValueMetaCommon[] | ComponentRule[] } | string

  export type ComponentRule = {
    name: string
    function: string
    args: CommonArgs
  }

  type ComponentJsonPage = {
    type: string
    rules: ComponentRule[]
  }

  export type ValueMetaCommon = ValueMetaContainer | ValueMetaIdentity

  type CommonArgs = IdentityArgs | ContainerArgs

  type ValueMetaContainer = {
    meta: ContainerValueMetaFields[]
    values: ChildrenHandlerReturnType[]
  }

  type ValueMetaIdentity = CommonValue

  export type IdentityArgs = string[]

  export type ContainerArgs = ComponentRule[]

  type ContainerValueMetaFields = {
    name: string
    function: FunctionNames
  }

  export type ChildrenHandlerReturnType = void | string | StyledText | ChildrenHandlerReturnType[] | IStringJson

  type CommonValue = IdentityValue | ContainerValue

  type FunctionNames = typeof IDENTITY | typeof CONTAINER

  type StyledText = string | JsonStyledText | JsonFewText

  export type IStringJson = { [key: string]: string }

  type IdentityValue =
    | ChildrenHandlerReturnType
    | NestedNestedNodeHandler
    | { text: ChildrenHandlerReturnType[] | ChildrenHandlerReturnType }

  type ContainerValue = ValueMeta[]

  type JsonStyledText = {
    type: string
    text: string | StyledText[]
    styles?: string[]
    [key: string]: string | (string | StyledText)[] | undefined
  }

  export type JsonFewText = { text: StyledText[] }

  type NestedNestedNodeHandler = string | { [key: string]: string }

  export type ValueMeta = ContainerValueMeta | IdentityValueMeta

  export type ContainerValueMeta = Omit<CommonValueMeta, "value"> & {
    value: ValueMetaContainer
    name: string
  }

  export type IdentityValueMeta = Omit<CommonValueMeta, "value"> & {
    value: ValueMetaIdentity
    name: string
  }

  type CommonValueMeta = {
    value: ValueMetaCommon
    function: FunctionNames
  }

  export type RuleMeta = {
    args: CommonMeta
    componentVariableName: string
    function: FunctionNames
  }

  export type CommonMeta = IdentityMeta | ContainerMeta

  type IdentityMeta = string

  export type ContainerMeta = RuleMeta[]

  export type IdentityRule = Omit<ComponentRule, "args"> & {
    args: IdentityArgs
  }

  export type ContainerRule = Omit<ComponentRule, "args"> & {
    args: ContainerArgs
  }

  export type ProcessedField = {
    data: { name: string; value: ValueMetaCommon | ComponentRule[] }[]
    rule: ComponentRule
  }

  export type NestedNodeHandler = (props: NodeHandlerProps) => ChildrenHandlerReturnType | ChildrenHandlerReturnType[]

  export type SlateTextHandler = (
    component: SlateComponent
  ) => NestedNestedNodeHandler | { text: ChildrenHandlerReturnType[] | ChildrenHandlerReturnType } | void

  export type FormattedTextHandler = (component: SlateComponent) => ChildrenHandlerReturnType
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  export type ArticleConverted = any
}

export default Contentful
