import React from "react"
import BaseProps from "../../../others/types/BaseProps"
import { useAmp } from "next/amp"

const NoAmpImageWithSize: React.FC<BaseProps> = ({ id, children }) => {
  return (
    <div className="my-8 flex justify-center" id={id}>
      {children}
    </div>
  )
}

export const ImageWithSize: React.FC<BaseProps> = ({ id, children }) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpImageWithSize id={id}>{children}</AmpImageWithSize>
  ) : (
    <NoAmpImageWithSize id={id}>{children}</NoAmpImageWithSize>
  )
}

const AmpImageWithSize: React.FC<BaseProps> = ({ id, children }) => (
  <div className={"image-container"} id={id}>
    {children}
    <style jsx>{`
      .image-container {
        display: flex;
        margin-left: 2rem;
        margin-right: 2rem;
        justify-content: center;
      }
    `}</style>
  </div>
)
