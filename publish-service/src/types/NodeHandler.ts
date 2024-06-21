import Content from "../../../common/types/Content"

export type NodeHandlerProps = {
  type?: string
  children?: Array<NodeHandlerProps>
  text?: string
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [propName: string]: any
}
export type NodeHandler = (props: NodeHandlerProps, form?: Content.PageFields) => void
