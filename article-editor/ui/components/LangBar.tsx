import React from "react"
import { platformConfig } from "../../types/platforms/platformConfig"
import { useApplicationValueContext } from "./ApplicationContext"

export const LangBar = () => {
  const { locale, setLocale } = useApplicationValueContext()
  return (
    <>
      <div className="switch-bar">
        {platformConfig.map((source) => (
          <div
            key={source}
            className={"switch-item" + (source === locale ? " active" : "")}
            onClick={() => {
              if (source !== locale) {
                setLocale(source)
              }
            }}
          >
            {source}
          </div>
        ))}
        <label
          className="switch-label"
          style={{
            left: `calc(var(--indent-9) * ${platformConfig.indexOf(locale)})`,
          }}
        ></label>
      </div>
      <style jsx>{`
        .switch-bar {
          display: flex;
          position: relative;
          z-index: 1;
          background: var(--light-gray-color);
          border-radius: 11px;
        }
        .switch-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--indent-9);
          height: var(--indent-9);
          z-index: 2;
          cursor: pointer;
          font-style: normal;
          font-weight: var(--font-weight-bold);
          font-size: var(--indent-3);
          text-transform: uppercase;
          color: var(--text-grey-color);
          user-select: none;
        }
        .active {
          color: var(--gray-90-color);
          transition: color 0.5s;
        }

        .switch-label {
          position: absolute;
          background: var(--text-white-color);
          border-radius: 11px;
          border: 2px solid var(--main-primary-color);
          width: var(--indent-9);
          height: var(--indent-9);
          transition: 0.4s;
          z-index: 0;
        }
      `}</style>
    </>
  )
}
