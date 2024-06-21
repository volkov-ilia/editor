import React from "react"

type componentType = {
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type ContentFormFieldsObject = {
  name: string
  placeholder?: string
  component: React.FC<componentType>
}

type Props = {
  fields: Array<ContentFormFieldsObject>
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setContentFormResult: React.Dispatch<React.SetStateAction<Object>>
}

export default Props
