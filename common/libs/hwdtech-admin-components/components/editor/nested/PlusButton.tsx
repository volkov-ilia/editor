import clsx from "clsx"
import React, { useEffect, useRef, useState } from "react"
import map from "lodash/map"
import size from "lodash/size"
import get from "lodash/get"
import { OptionalButton } from "./OptionalButton"
import includes from "lodash/includes"
import PlusButtonProps from "../../../others/types/editor/nested/PlusButtonProps"

export const PlusButton: React.FC<PlusButtonProps> = ({
  onClick,
  title,
  componentsMap,
  color = "green",
  isOpen,
  setOpen,
}) => {
  const [onTop, setOnTop] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const maxHeight = 28
  const selectPadding = 24
  const selectItemHeight = 24
  const selectItemMargin = 8
  const shownItems = size(componentsMap) > 13 ? 13 : size(componentsMap)
  const selectHeight =
    size(componentsMap) > 13
      ? maxHeight * 16
      : selectPadding * 2 + selectItemHeight * shownItems + 1 + selectItemMargin * (shownItems - 1)

  useEffect(() => {
    const closeSelector = (event: MouseEvent) => {
      if (ref.current && !includes(get(ref, "current.children"), event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", closeSelector)
    return () => {
      document.removeEventListener("mousedown", closeSelector)
    }
  }, [ref, setOpen])

  return (
    <div className={"w-full flex flex-col items-center"}>
      <div
        className={clsx(
          `plus absolute border-${color} rounded-full text-${color} flex self-center bg-white group-hover:block `,
          isOpen ? "block z-20" : "hidden z-10"
        )}
      >
        <OptionalButton
          onClick={(e) => {
            const screen = window.innerHeight
            const anchor = e.clientY
            setOpen(!isOpen)
            setOnTop(screen - anchor < selectHeight)
          }}
          title={title}
          icon={"add"}
        />
      </div>
      {isOpen && (
        <div
          contentEditable={false}
          suppressContentEditableWarning={true}
          className={"drop-down relative w-full z-15 flex justify-center"}
        >
          <div className={clsx("absolute -mt-5", { onTop: onTop })}>
            <div
              className={clsx(
                "components-box overflow-y-auto border-green border-r border-l flex flex-col bottom-0 shadow-lg py-6 bg-white",
                onTop ? "border-t" : "border-b"
              )}
              ref={ref}
            >
              {map(componentsMap, (component) => (
                <button
                  key={`${title} ${component.name}`}
                  className={"components-item hover:bg-green hover:text-white px-4"}
                  title={`${title} ${component.name}`}
                  onClick={(event) => {
                    onClick(event, component.format)
                    setOpen(false)
                  }}
                >
                  {component.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .plus {
          bottom: -0.85rem;
          font-size: 1.5rem;
          line-height: 1.5rem;
          background: white;
        }

        .options {
          padding: 0.15rem;
          right: 0;
          top: 0;
          font-size: 1.5rem;
          line-height: 1.5rem;
        }

        .drop-down {
          bottom: -1.5rem;
        }

        .components-item:not(:last-child) {
          margin-bottom: 0.5rem;
        }

        .components-box {
          max-height: ${maxHeight}rem;
        }

        .onTop {
          top: -${selectHeight + 5}px;
        }

        .components-box::-webkit-scrollbar-track {
          margin: 0.75rem;
          border-radius: 0.75rem;
          border: 2px solid #d1d1d1;
          background-color: rgba(253, 253, 253, 1);
        }

        .components-box::-webkit-scrollbar {
          margin: 1rem;
          width: 0.75rem;
          background-color: transparent;
        }

        .components-box::-webkit-scrollbar-thumb {
          margin-right: 1rem;
          border-radius: 0.75rem;
          border: 0.125rem solid rgba(18, 182, 152, 1);
        }
      `}</style>
    </div>
  )
}
