import { useAmp } from "next/amp"
import React from "react"
import clsx from "clsx"
import ComponentTitleProps from "../../../../others/types/nested/ComponentTitleProps"

export const ComponentTitle: React.FC<ComponentTitleProps> = ({ line1, line2, line3, easterEggs }) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpComponentTitle line1={line1} line2={line2} line3={line3} />
  ) : (
    <NoAmpComponentTitle line1={line1} line2={line2} line3={line3} easterEggs={easterEggs} />
  )
}

const NoAmpComponentTitle: React.FC<ComponentTitleProps> = ({ line1, line2, line3, easterEggs }) => (
  <h1
    className={clsx(
      "relative whitespace-pre text-light-black tracking-tight font-light",
      "text-2-5xl sm:text-4xl md:text-4-5xl lg:text-4xl xl:text-5-5xl",
      "mt-8 mb-6 sm:w-3/5 xl:w-full xxl:w-5/6 xxxl:w-1/2",
      "leading-light-snug theme-font"
    )}
  >
    {easterEggs && easterEggs}
    <p>{line1}</p>
    {line2 && <p>{line2}</p>}
    {line3 && <p>{line3}</p>}
  </h1>
)

const AmpComponentTitle: React.FC<Omit<ComponentTitleProps, "easterEggs">> = ({ line1, line2, line3 }) => (
  <h1 className={"title"}>
    <p>{line1}</p>
    {line2 && <p>{line2}</p>}
    {line3 && <p>{line3}</p>}
    <style jsx>{`
      p {
        margin-block-start: 0;
        margin-block-end: 0;
      }
      .title {
        line-height: 1.31;
        white-space: pre;
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: -0.025em;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
      }
    `}</style>
  </h1>
)
