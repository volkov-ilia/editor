import React, { useState } from "react"
import { SymbolIcon } from "../page/common/SymbolIcon"
import { icons } from "../../others/editor/iconCodes"
import get from "lodash/get"
import addImageText from "../page/slateComponents/texts/addImageText"
import { SaveAndCancel } from "./nested/SaveAndCancel"
import AddImageProps from "../../others/types/editor/AddImageProps"
import EDITOR_ICON_SPACE from "../../others/iconSpaces/EDITOR_ICON_SPACE"

export const AddImage: React.FC<AddImageProps> = ({
  attributes,
  saveImageHandler,
  defaultImage,
  isOpen,
  setIsOpen,
  setIsLoading,
}) => {
  const [file, setFile] = useState<Blob | null>(null)
  const [fileName, setFileName] = useState("")

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      setFile(get(event, "target.files[0]"))
      setFileName(get(event, "target.files[0].name"))
    }
  }

  const saveImage = async (event: React.MouseEvent) => {
    await saveImageHandler({ event, file, setIsLoading, setIsOpen })
  }

  const cancel = (event: React.MouseEvent) => {
    event.preventDefault()
    setFile(null)
    setIsOpen(false)
  }

  return isOpen ? (
    <div
      {...attributes}
      contentEditable={false}
      suppressContentEditableWarning={true}
      className={"picture-editor fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center"}
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false)
      }}
    >
      <div
        className={
          "editor text-2xl rounded-2xl text-green py-5 px-9 border-2 border-green bg-white flex flex-col justify-between"
        }
      >
        <SaveAndCancel onClickCancel={cancel} onClickSave={saveImage} text={addImageText} />
        <div className={"image-container flex justify-center items-center"}>
          <img
            className={"max-w-full max-h-full self-center"}
            src={file ? URL.createObjectURL(file) : defaultImage}
            alt={"TODO: получение альта из редактора"}
          />
        </div>
        <div className={"editor-buttons-container pt-4"}>
          <div
            contentEditable={false}
            suppressContentEditableWarning={true}
            className={"file-field flex rounded-3xl py-5 px-6 relative border border-green justify-between"}
          >
            <div className={"w-10/12 overflow-ellipsis overflow-hidden whitespace-nowrap"}>{fileName}</div>
            <label>
              <input
                type={"file"}
                accept={"image/*"}
                className={"absolute invisible"}
                onChange={(event) => uploadImage(event)}
              />
              <SymbolIcon icon={icons.pen} className={"cursor-pointer"} space={EDITOR_ICON_SPACE} />
            </label>
          </div>
        </div>
      </div>
      <style jsx>{`
        .picture-editor {
          background-color: rgba(0, 0, 0, 0.25);
        }

        .editor {
          width: 1032px;
          height: 822px;
        }

        .file-field {
          width: 482px;
        }

        .image-container {
          height: 74.3%;
          width: 100%;
        }

        .editor-buttons-container {
          height: 17%;
          width: 100%;
        }
      `}</style>
    </div>
  ) : (
    <></>
  )
}
