import { SymbolIcon } from "../../page/common/SymbolIcon"
import { icons } from "../../../others/editor/iconCodes"
import EDITOR_ICON_SPACE from "../../../others/iconSpaces/EDITOR_ICON_SPACE"
import React from "react"
import InputFieldProps from "../../../others/types/editor/nested/InputFieldProps"
import map from "lodash/map"

export const InputField: React.FC<InputFieldProps> = ({
  key,
  value,
  setValue,
  placeholder,
  type,
  label,
  list,
  listId,
  ...attributes
}) => {
  return (
    <div
      key={key}
      className={"input-field flex rounded-3xl py-3 px-6 border border-green justify-between items-center bg-white "}
    >
      {label && <div className={"whitespace-nowrap"}>{label}</div>}
      <input
        type={type}
        className={"overflow-ellipsis overflow-hidden whitespace-nowrap focus:outline-none h-8 text-xl w-full"}
        onChange={(event) => setValue(event.target.value)}
        value={value}
        placeholder={placeholder}
        list={listId}
        {...attributes}
      />
      {list && listId && (
        <datalist id={listId}>
          {map(list, (item) => (
            <option>{item}</option>
          ))}
        </datalist>
      )}
      <SymbolIcon
        icon={icons.pen}
        className={"cursor-pointer text-green flex justify-center items-center text-2xl"}
        space={EDITOR_ICON_SPACE}
      />
      <style jsx>{`
        label > div {
          max-width: 30%;
        }
      `}</style>
    </div>
  )
}
