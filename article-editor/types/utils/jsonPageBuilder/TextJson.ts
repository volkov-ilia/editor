import { NestedMap, NestedNestedMap } from "./ParsedPage"
import { ReactElement } from "react"

type TextJson = string | NestedMap | NestedNestedMap[] | { text: ReactElement | ReactElement[]; header: string }

export default TextJson
