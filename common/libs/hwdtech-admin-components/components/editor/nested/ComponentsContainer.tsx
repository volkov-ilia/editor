import clsx from "clsx"
import ComponentsContainerProps from "../../../others/types/editor/ComponentsContainerProps"
import React from "react"

export const ComponentsContainer: React.FC<ComponentsContainerProps> = ({ children, className }) => {
  return (
    <div className={clsx("editor", className)}>
      {children}
      <style jsx>{`
        .editor {
          min-height: 78rem;
        }
      `}</style>
    </div>
  )
}
