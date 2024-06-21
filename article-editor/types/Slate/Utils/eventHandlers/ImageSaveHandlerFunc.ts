import { AxiosResponse } from "axios"
import React from "react"
import { BaseEditor, BaseElement, BaseRange } from "slate"
import { ReactEditor } from "slate-react"
import { HistoryEditor } from "slate-history"
import CustomElementType from "../CustomElementType"

export type ImageSaveHandlerProps = {
  event: React.MouseEvent
  file: Blob | null
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  imageTypeHandler: ({ type, file }: { type: string; file: Blob }) => Promise<void>
}

export type SaveImageHandlerProps = Omit<ImageSaveHandlerProps, "imageTypeHandler"> & {
  editor: BaseEditor & ReactEditor & HistoryEditor & BaseRange
  element: BaseElement & CustomElementType
  itemType: string
}

type ImageSaveHandlerFunc = (props: ImageSaveHandlerProps) => Promise<void>

export default ImageSaveHandlerFunc
