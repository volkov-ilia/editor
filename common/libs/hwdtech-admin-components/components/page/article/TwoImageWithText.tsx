import React from "react"
import TwoImageWithTextProps from "../../../others/types/TwoImageWithTextProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"

const NoAmpTwoImageWithText: React.FC<TwoImageWithTextProps> = ({ id, children, description }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <div id={id} className="my-8 pt-12">
      <div className="images w-full flex mb-2 flex justify-center">{children}</div>
      <div {...editableTrue} className="description-block flex justify-center italic w-full">
        {description}
      </div>
      <style jsx>{`
        .description-block:focus {
          outline: none;
        }
      `}</style>
    </div>
  )
}

export const TwoImageWithText: React.FC<TwoImageWithTextProps> = ({ id, children, description }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpTwoImageWithText id={id} description={description}>
      {children}
    </AmpTwoImageWithText>
  ) : (
    <NoAmpTwoImageWithText id={id} description={description}>
      {children}
    </NoAmpTwoImageWithText>
  )
}

const AmpTwoImageWithText: React.FC<TwoImageWithTextProps> = ({ id, children, description }) => (
  <div id={id} className="block">
    <div className="images-block">{children}</div>
    <div className="description-block">
      <div className="description-block flex justify-center italic w-full">{description}</div>
    </div>
    <style jsx>{`
      .block {
        margin: 2rem 0;
        padding-top: 3rem;
      }

      .images-block {
        display: flex;
        margin-bottom: 1rem;
        width: 100%;
        justify-content: center;
      }

      .description-block {
        display: flex;
        justify-content: center;
        width: 100%;
        font-style: italic;
      }

      .description-block:focus {
        outline: none;
      }
    `}</style>
  </div>
)
