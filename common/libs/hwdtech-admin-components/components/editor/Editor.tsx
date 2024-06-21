import { ComponentsContainer } from "./nested/ComponentsContainer"
import React from "react"
import EditorProps from "../../others/types/editor/EditorProps"
import EDITOR_WIDTH from "../../others/constants/EDITOR_WIDTH"
import EDITOR_MIN_HEIGHT from "../../others/constants/EDITOR_MIN_HEIGHT"

export const Editor: React.FC<EditorProps> = ({ children, toolbar, width }) => {
  return (
    <div className={"editor-container px-10 pb-24 border border-green bg-light rounded-2xl"}>
      {toolbar}
      <ComponentsContainer>{children}</ComponentsContainer>
      <style jsx>{`
        .editor-container {
          width: ${width}rem;
          min-height: ${EDITOR_MIN_HEIGHT}rem;
          padding: 0 7.5rem;
        }
      `}</style>
    </div>
  )
}

Editor.defaultProps = {
  width: EDITOR_WIDTH,
}
