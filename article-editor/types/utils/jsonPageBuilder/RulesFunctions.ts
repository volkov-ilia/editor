/* eslint-disable @typescript-eslint/no-explicit-any */
import JsonPage, { ComponentRule } from "./JsonPage"
import IStringJson from "../contentful/IStringJson"

export type RulesFunctionsMap = {
  [key: string]: IdentityFunc | ContainerFunc
}

export type IdentityFunc = (json: JsonPage | IStringJson, ...args: [string]) => any
export type ContainerFunc = (json: JsonPage | IStringJson, ...args: [ComponentRule, ComponentRule]) => any
