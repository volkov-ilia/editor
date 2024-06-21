import { SmallComponentsToolbarItem } from "hwdtech-admin-components"
import React from "react"
import { useApplicationValueContext } from "../ApplicationContext"
import { deleteAllNodes } from "../../../utils/deleteAllNodes"

const Button = ({ icon, editor }: { icon: string; editor: any }) => {
  const { setValue } = useApplicationValueContext()
  return (
    <div>
      <SmallComponentsToolbarItem
        disabled={false}
        onClick={() => {
          deleteAllNodes(editor, setValue)
        }}
        icon={icon}
      />
    </div>
  )
}

export default Button
