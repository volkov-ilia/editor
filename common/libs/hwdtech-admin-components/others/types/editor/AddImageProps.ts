import AttributesProp from "../AtomicProps/AttributesProp"
import React from "react"
import SaveImageHandlerFunc from "../SaveImageHandlerFunc"

type Props = AttributesProp & {
  saveImageHandler: SaveImageHandlerFunc
  defaultImage?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default Props
