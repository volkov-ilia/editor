import React from "react"

export type SaveImageHandlerProps = {
  event: React.MouseEvent
  file: Blob | null
  fileName: string
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type SaveImageHandlerFunc = (props: SaveImageHandlerProps) => Promise<void>

export default SaveImageHandlerFunc
