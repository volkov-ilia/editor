import React from "react"
import { SymbolIcon } from "../common/SymbolIcon"
import { pageIcons } from "../../../others/page/iconCodes"
import QuoteProps from "../../../others/types/QuoteProps"
import { useAmp } from "next/amp"
import { themeColorsColors } from "../../../others/page/colors"
import { useEditorModeContext } from "../../EditorModeContext"

export const Quote: React.FC<QuoteProps> = ({ id, children, signature }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpQuote id={id} signature={signature}>
      {children}
    </AmpQuote>
  ) : (
    <NoAmpQuote id={id} signature={signature}>
      {children}
    </NoAmpQuote>
  )
}

const NoAmpQuote: React.FC<QuoteProps> = ({ id, children, signature }) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}
  return (
    <div id={id}>
      <div {...editableFalse} className="flex justify-end mt-8 mb-4">
        <div className="font-bold text-green uppercase tracking-widest">QUOTE</div>
      </div>
      <div className="my-8 md:mt-0">
        <div {...editableFalse} className="absolute align-top text-gray text-base lg:text-lg">
          <SymbolIcon icon={pageIcons.quotes} />
        </div>
        <div className="flex flex-col">
          <div className="comment-text text-light-black leading-relaxed">{children}</div>
          <div className="author flex justify-end mt-3 mb-8 text-light-gray font-normal relative text-right">
            {signature}
          </div>
        </div>
      </div>
      <style jsx>{`
        .comment-text {
          font-size: 18px;
          text-indent: 27px;
        }

        @media (min-width: 425px) {
          .comment-text {
            font-size: 22px;
            text-indent: 27px;
          }
        }

        .author {
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}

const AmpQuote: React.FC<QuoteProps> = ({ id, children, signature }) => (
  <div id={id}>
    <div className="quote-container">
      <span className="quote">QUOTE</span>
    </div>
    <div>
      <span className="icon">
        <SymbolIcon icon={pageIcons.quotes} />
      </span>
      <div className="text-and-author">
        <div className="comment-text">{children}</div>
        {signature && <div className="author font-normal">{signature}</div>}
      </div>
    </div>
    <style jsx>{`
      .quote-container {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }
      .quote {
        font-weight: 700;
        color: ${themeColorsColors.primary};
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .icon {
        position: absolute;
        vertical-align: top;
        color: rgb(156, 163, 175);
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .text-and-author {
        display: flex;
        flex-direction: column;
      }
      .comment-text {
        font-size: 18px;
        text-indent: 27px;
        color: ${themeColorsColors.lightBlack};
        line-height: 1.625;
      }
      @media (min-width: 425px) {
        .comment-text {
          font-size: 22px;
          text-indent: 27px;
        }
      }
      .author {
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        margin-top: 0.75rem;
        margin-bottom: 2rem;
        color: ${themeColorsColors.lightGray};
        font-weight: 400;
      }
    `}</style>
  </div>
)
