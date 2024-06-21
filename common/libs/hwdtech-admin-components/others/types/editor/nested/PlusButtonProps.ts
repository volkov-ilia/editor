import React, { MouseEvent } from "react"

type ComponentsMapObject = {
  name: string
  format: string
}

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>, format: string) => void
  title: string
  componentsMap: Array<ComponentsMapObject>
  color?: string
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default Props
