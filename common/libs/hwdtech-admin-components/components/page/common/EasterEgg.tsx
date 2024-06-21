import React, { LegacyRef } from "react"
import clsx from "clsx"
import get from "lodash/get"
import { themeColorsColors } from "../../../others/page/colors"
import EasterEggsProps from "../../../others/types/nested/EasterEggsProps"
import { useOnScreen } from "../../../utils/useOnScreen"
import ChildrenProp from "../../../others/types/AtomicProps/ChildrenProp"

const Egg: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        @keyframes bounce-in-top {
          0% {
            transform: translateY(-500px);
            animation-timing-function: ease-in;
            opacity: 0;
          }
          38% {
            transform: translateY(0);
            animation-timing-function: ease-out;
            opacity: 1;
          }
          55% {
            transform: translateY(-65px);
            animation-timing-function: ease-in;
          }
          72% {
            transform: translateY(0);
            animation-timing-function: ease-out;
          }
          81% {
            transform: translateY(-28px);
            animation-timing-function: ease-in;
          }
          90% {
            transform: translateY(0);
            animation-timing-function: ease-out;
          }
          95% {
            transform: translateY(-8px);
            animation-timing-function: ease-in;
          }
          100% {
            transform: translateY(0);
            animation-timing-function: ease-out;
          }
        }

        div {
          animation: bounce-in-top 1.5s both;
        }
      `}</style>
    </>
  )
}

export const EasterEgg: React.FC<EasterEggsProps> = ({ posX, posY, icon, color, bg, hover, rotate }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.75 })
  const colorValue = get(themeColorsColors, color)
  const isMinArgs = get(posX, "base") && get(posY, "base") && icon && color

  return isMinArgs ? (
    <div ref={setRef as LegacyRef<HTMLDivElement>} className={clsx({ "bg-white page-bg": bg, text: hover })}>
      {visible && <Egg>{icon}</Egg>}
      <style jsx>{`
        div {
          position: absolute;
          z-index: 5;
          top: ${posY.base};
          left: ${posX.base};
          color: ${colorValue};
          transform: rotate(${rotate || 0}deg);
        }

        @screen sm {
          div {
            top: ${posY.sm};
            left: ${posX.sm};
          }
        }

        @screen md {
          div {
            top: ${posY.md};
            left: ${posX.md};
          }
        }
        @screen lg {
          div {
            top: ${posY.lg};
            left: ${posX.lg};
          }
        }

        .text {
          color: transparent;
          transition: color 0.5s ease;
          margin: 0;
        }

        .text:hover {
          color: ${colorValue};
        }
      `}</style>
    </div>
  ) : (
    <></>
  )
}
