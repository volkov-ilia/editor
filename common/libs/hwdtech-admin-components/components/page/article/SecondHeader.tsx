import React from "react"
import BaseProps from "../../../others/types/BaseProps"
import { useEditorModeContext } from "../../EditorModeContext"
import { useAmp } from "next/amp"

const NoAmpSecondHeader: React.FC<BaseProps> = ({ id, children }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <>
      <h2 {...editableTrue} className="second-header" id={id}>
        {children}
      </h2>
      <style jsx>{`
        .second-header {
          font-weight: 300;
          font-size: 3rem;
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0;
          margin-inline-end: 0;
          overflow-wrap: break-word;
        }

        .second-header:focus {
          outline: none;
        }

        @media (max-width: 1020px) {
          .second-header {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 640px) {
          .second-header {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export const SecondHeader: React.FC<BaseProps> = ({ id, children }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpSecondHeader id={id}>{children}</AmpSecondHeader>
  ) : (
    <NoAmpSecondHeader id={id}>{children}</NoAmpSecondHeader>
  )
}

const AmpSecondHeader: React.FC<BaseProps> = ({ id, children }) => (
  <>
    <h2 className="second-header" id={id}>
      {children}
    </h2>
    <style jsx>{`
      .second-header {
        font-weight: 300;
        font-size: 1.5rem;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0;
        margin-inline-end: 0;
        overflow-wrap: break-word;
      }
    `}</style>
  </>
)
