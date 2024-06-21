import React from "react"
import clsx from "clsx"
import ArticleTextProps from "../../../others/types/ArticleTextProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"
import { themeColorsColors } from "../../../others/page/colors"

export const ArticleText: React.FC<ArticleTextProps> = ({ id, children, backgroundColor, className }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpArticleText id={id} backgroundColor={backgroundColor} className={className}>
      {children}
    </AmpArticleText>
  ) : (
    <NoAmpArticleText id={id} backgroundColor={backgroundColor} className={className}>
      {children}
    </NoAmpArticleText>
  )
}

const NoAmpArticleText: React.FC<ArticleTextProps> = ({ id, children, backgroundColor, className }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableTrue = isEditable ? { contentEditable: true, suppressContentEditableWarning: true } : {}
  return (
    <>
      <div {...editableTrue} className={clsx("text", { "colored-block": !!backgroundColor }, className)} id={id}>
        {children}
      </div>
      <style jsx>{`
        .text {
          white-space: pre-wrap;
          font-weight: 300;
          line-height: 2;
          font-size: 1.25rem;
          margin-block-end: 30px;
        }

        .text:focus {
          outline: none;
        }

        @media (max-width: 640px) {
          .text {
            font-size: 1rem;
          }
        }

        .colored-block {
          padding: 1rem 3rem 2rem;
          border: 1px solid rgb(217, 220, 233);
          background: ${backgroundColor};
        }

        @media (max-width: 768px) {
          .colored-block {
            margin: 2rem 0;
          }
        }

        .green-line {
          padding-left: 2rem;
          border-left: 2px solid;
          border-color: ${themeColorsColors.primary};
          font-size: 18px;
          text-indent: 27px;
          font-weight: 500;
          color: ${themeColorsColors.lightBlack};
          line-height: 1.625;
        }
        .green-line:focus {
          outline: none;
        }
      `}</style>
    </>
  )
}

const AmpArticleText: React.FC<ArticleTextProps> = ({ id, children, backgroundColor, className }) => (
  <>
    <div className={clsx("text", { "colored-block": !!backgroundColor }, className)} id={id}>
      {children}
    </div>
    <style jsx>{`
      .text {
        white-space: pre-wrap;
        font-weight: 300;
        line-height: 2;
        font-size: 1rem;
        margin-block-end: 30px;
      }

      .colored-block {
        padding: 1rem 3rem 2rem;
        border: 1px solid rgb(217, 220, 233);
        background: ${backgroundColor};
      }

      .green-line {
        padding-left: 2rem;
        border-left: 2px solid;
        border-color: ${themeColorsColors.primary};
        font-size: 18px;
        text-indent: 27px;
        font-weight: 500;
        color: ${themeColorsColors.lightBlack};
        line-height: 1.625;
      }
      .green-line:focus {
        outline: none;
      }
    `}</style>
  </>
)
