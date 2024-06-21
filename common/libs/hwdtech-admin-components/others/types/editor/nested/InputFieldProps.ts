import React from "react"

type Props = {
  value: string
  setValue: (value: string) => void | React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
  type?: string
  label?: string
  list?: string[]
  listId?: string
  [key: string]: any
}

export default Props
