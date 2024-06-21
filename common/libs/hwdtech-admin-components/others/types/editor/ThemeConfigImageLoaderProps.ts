import React from "react"

type Props = {
  idInput: string
  loadButtonText: string
  initialText?: string
  lastImage?: string
  isMultiple: boolean
  uploadImage: (event: React.ChangeEvent<HTMLInputElement>, inputRef: React.RefObject<HTMLInputElement>) => void
  showImageMethod: (current: HTMLDivElement, lastImage: string, defaultText?: string) => void
}

export default Props
