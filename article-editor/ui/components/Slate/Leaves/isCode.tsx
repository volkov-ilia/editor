import React from "react"
import clsx from "clsx"
import isCodeProps from "../../../../types/Slate/Components/Leaves/isCodeProps"

const Leaf: React.FC<isCodeProps> = ({ className, children }) => {
  return <span className={clsx("token", className)}>{children}</span>
}

export default Leaf
