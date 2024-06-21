import React from "react"
import clsx from "clsx"
import ImageColumnWithTextProps from "../../../others/types/ImageColumnWithTextProps"
import { useAmp } from "next/amp"

export const ImageColumnWithText: React.FC<ImageColumnWithTextProps> = ({ id, children, text, isImageLeft }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpImageColumnWithText id={id} text={text} isImageLeft={isImageLeft}>
      {children}
    </AmpImageColumnWithText>
  ) : (
    <NoAmpImageColumnWithText text={text} isImageLeft={isImageLeft}>
      {children}
    </NoAmpImageColumnWithText>
  )
}

const NoAmpImageColumnWithText: React.FC<ImageColumnWithTextProps> = ({ id, children, text, isImageLeft }) => (
  <>
    <div
      id={id}
      className={clsx(
        "my-8 pt-12 flex flex-col justify-center",
        isImageLeft ? "left lg:flex-row" : "right lg:flex-row-reverse"
      )}
    >
      <div className={clsx("w-full lg:w-1/2 mb-2 image-container", isImageLeft ? "lg:pr-3" : "lg:pl-3")}>
        {children}
      </div>
      <div className={clsx("w-full lg:w-1/2", isImageLeft ? "lg:pl-3" : "lg:pr-3")}>{text}</div>
    </div>
    <style jsx>{`
      @media (min-width: 1024px) {
        .left {
          flex-direction: row;
        }

        .right {
          flex-direction: row-reverse;
        }

        .image-container {
          max-width: 720px;
        }
      }
    `}</style>
  </>
)

const AmpImageColumnWithText: React.FC<ImageColumnWithTextProps> = ({ id, children, text, isImageLeft }) => (
  <>
    <div className={clsx("block", isImageLeft ? "left" : "right")} id={id}>
      <div className={"images-block"}>{children}</div>
      <div>{text}</div>
    </div>
    <style jsx>{`
      .block {
        margin: 2rem 0;
        padding-top: 3rem;
      }

      .images-block {
        margin-bottom: 1rem;
        max-width: 365px;
        height: 100%;
      }

      .description-block {
        margin-top: 1rem;
        text-align: center;
      }

      .left {
        flex-direction: row;
      }

      .right {
        flex-direction: row-reverse;
      }
    `}</style>
  </>
)
