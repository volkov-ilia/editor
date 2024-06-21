import clsx from "clsx"
import get from "lodash/get"
import React from "react"
import TextAlignProps from "../../../others/types/nested/TextAlignProps"

export const TextAlign = ({ attributes, align, children }: TextAlignProps) => {
  const map = {
    center: "justify-center",
    right: "justify-end",
  }
  const justify = get(map, align)
  return justify ? (
    <span {...attributes} className={clsx(`w-full flex`, justify)}>
      {children}
    </span>
  ) : (
    children
  )
}

TextAlign.defaultProps = {
  align: "",
}
