import { BaseEditor, BaseElement, Selection } from "slate"
import { ReactEditor } from "slate-react"
import { HistoryEditor } from "slate-history"
import CustomElementType from "./types/Slate/Utils/CustomElementType"

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor & Selection
export type CustomElement = BaseElement & CustomElementType
export type CustomNode = CustomEditor & CustomElement & { type?: string }
declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor
    Element: CustomElement
    Node: CustomNode
  }
}
