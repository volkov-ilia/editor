import React from "react"
import { Link } from "hwdtech-admin-components"
import WrappedComponentsProps from "../../../../../types/Slate/Components/Elements/WrappedComponentsProps"
import { BaseElement } from "slate"

const Wrapped: React.FC<WrappedComponentsProps> = ({ attributes, element, children }) => {
  const elem = element as BaseElement & { url: string; title: string }
  return (
    <Link href={elem.url} title={elem.title} attributes={attributes}>
      {children}
    </Link>
  )
}

export default Wrapped
