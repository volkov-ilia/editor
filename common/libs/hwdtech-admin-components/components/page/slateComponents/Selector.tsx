import map from "lodash/map"
import get from "lodash/get"
import React from "react"
import SelectorProps from "../../../others/types/nested/SelectorProps"
import shortID from "../../../utils/shortID"

export const Selector: React.FC<SelectorProps> = ({ attributes, children, values, onChange, selectedItem }) => {
  return (
    <div
      {...attributes}
      contentEditable={false}
      suppressContentEditableWarning={true}
      className={"flex justify-between select-none"}
    >
      <div className={"flex mr-4"}>
        <div className={"mr-4"}>Current:</div>
        <div contentEditable={false} suppressContentEditableWarning={true} className={"select-none"}>
          {children}
        </div>
      </div>
      <select onChange={onChange} value={selectedItem ? selectedItem : get(values, [0])}>
        {map(values, (component) => (
          <option key={shortID()} value={component}>
            {component}
          </option>
        ))}
      </select>
    </div>
  )
}
