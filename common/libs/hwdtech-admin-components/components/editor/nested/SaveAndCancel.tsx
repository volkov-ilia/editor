import { EditorPrimaryButton } from "./EditorPrimaryButton"
import React from "react"
import SaveAndCancelProps from "../../../others/types/editor/nested/SaveAndCancelProps"

export const SaveAndCancel: React.FC<SaveAndCancelProps> = ({ onClickCancel, onClickSave, text }) => {
  return (
    <div className={"buttons-container pb-5"}>
      <EditorPrimaryButton
        text={text.cancelButton}
        title={text.titleCancel}
        onClick={onClickCancel}
        className={"border-pink text-pink"}
      />
      <div className={"text-center"}>{text.header}</div>
      <EditorPrimaryButton text={text.saveButton} title={text.titleSave} onClick={onClickSave} />
      <style jsx>{`
        .buttons-container {
          height: 8.7%;
          width: 100%;
          display: grid;
          grid-template-columns: 0.75fr 1.5fr 0.75fr;
        }
      `}</style>
    </div>
  )
}
