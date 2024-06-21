import { Component } from "../../types"
import React from "react"

export type SideColumnProps = {
  content: JSX.Element
}

export const SideColumn: Component<SideColumnProps> = ({ content }) => {
  return (
    <div className="side-column">
      <div className="side-column__content">{content}</div>
      <style jsx>{`
        .side-column {
          width: 100%;
          height: 100%;

          padding: 0 2.68rem;

          background-color: #efefef;
        }

        .side-column__content {
          position: sticky;
          top: 10px;
        }
      `}</style>
    </div>
  )
}
