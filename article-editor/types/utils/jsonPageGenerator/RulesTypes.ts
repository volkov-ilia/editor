import CONTAINER from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/CONTAINER"
import IDENTITY from "../../../utils/jsonPageGenerator/rulesBuilder/functionsRules/functionsNames/IDENTITY"
import ChildrenHandlerReturnType from "./ChildrenHandlerReturnType"
import { ComponentRule } from "../jsonPageBuilder/JsonPage"
import { NestedNestedNodeHandler } from "./NodeHandler"

export type ContainerMeta = RuleMeta[]
export type IdentityMeta = string

export type ContainerValue = ValueMeta[]
export type IdentityValue =
  | ChildrenHandlerReturnType
  | NestedNestedNodeHandler
  | { text: ChildrenHandlerReturnType[] | ChildrenHandlerReturnType }

export type CommonMeta = IdentityMeta | ContainerMeta

export type CommonValue = IdentityValue | ContainerValue

export type FunctionNames = typeof IDENTITY | typeof CONTAINER

export type RuleMeta = {
  args: CommonMeta
  componentVariableName: string
  function: FunctionNames
}

export type NestedValueMeta = { [key: string]: string | NestedValueMeta }

export type ContainerValueMetaFields = {
  name: string
  function: FunctionNames
}
export type ValueMetaContainer = {
  meta: ContainerValueMetaFields[]
  values: ChildrenHandlerReturnType[]
}
export type ValueMetaIdentity = CommonValue
export type ValueMetaCommon = ValueMetaContainer | ValueMetaIdentity

export type IdentityValueMeta = Omit<CommonValueMeta, "value"> & {
  value: ValueMetaIdentity
  name: string
}

export type ContainerValueMeta = Omit<CommonValueMeta, "value"> & {
  value: ValueMetaContainer
  name: string
}

export type CommonValueMeta = {
  value: ValueMetaCommon
  function: FunctionNames
}

export type ValueMeta = ContainerValueMeta | IdentityValueMeta

export type ProcessedField = {
  data: { name: string; value: ValueMetaCommon | ComponentRule[] }[]
  rule: ComponentRule
}
export type ProcessedFieldBuilder = (field: ValueMeta, componentName: string) => ProcessedField | void

export type RuleValues = { [key: string]: ChildrenHandlerReturnType }
export type RuleValue = { argName: string; value: ChildrenHandlerReturnType }
