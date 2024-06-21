import React from "react"
import BaseProps from "../../../others/types/BaseProps"
import { useEditorModeContext } from "../../EditorModeContext"
import { useAmp } from "next/amp"

const NoAmpThirdHeader: React.FC<BaseProps> = ({ id, children }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <>
      <h3 {...editableTrue} className="third-header" id={id}>
        {children}
      </h3>
      <style jsx>{`
        .third-header {
          font-weight: 300;
          font-size: 2.5rem;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0;
          margin-inline-end: 0;
          overflow-wrap: break-word;
        }

        .third-header:focus {
          outline: none;
        }

        @media (max-width: 1020px) {
          .third-header {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .third-header {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  )
}

export const ThirdHeader: React.FC<BaseProps> = ({ id, children }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpThirdHeader id={id}>{children}</AmpThirdHeader>
  ) : (
    <NoAmpThirdHeader id={id}>{children}</NoAmpThirdHeader>
  )
}

const AmpThirdHeader: React.FC<BaseProps> = ({ id, children }) => (
  <>
    <h3 className="third-header" id={id}>
      {children}
    </h3>
    <style jsx>{`
      .third-header {
        font-weight: 300;
        font-size: 1.25rem;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0;
        margin-inline-end: 0;
      }
    `}</style>
  </>
)
