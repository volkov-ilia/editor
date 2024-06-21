import isEmpty from "lodash/isEmpty"
import { EmptyImage } from "./EmptyImage"
import React, { useState } from "react"
import get from "lodash/get"
import { AddImage } from "../../editor/AddImage"
import { Loading } from "../../editor/nested/Loading"
import { WrappedImageComponent } from "./WrappedImageComponent"
import ImageOrEmptyProps from "../../../others/types/nested/ImageOrEmptyProps"

export const ImageOrEmpty: React.FC<ImageOrEmptyProps> = ({
  attributes,
  children,
  node,
  saveImageHandler,
  width,
  height,
  buttons,
  emptyImageText,
}) => {
  const [openEditor, setOpenEditor] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const url = get(node, "url")
  const alt = get(node, "alt")

  const altSlate = get(children, "alt")
  const imageDescriptionSlate = get(children, "imageDescription")
  return (
    <>
      {!isEmpty(url) ? (
        <div {...attributes} className={"flex justify-center items-center"}>
          <div
            className={"cursor-pointer box flex-grow"}
            contentEditable={false}
            suppressContentEditableWarning={true}
            onClick={() => setOpenEditor(true)}
          >
            {isLoading ? (
              <div className={"loading flex items-center justify-center text-green"}>
                <Loading />
              </div>
            ) : (
              <WrappedImageComponent buttons={buttons} src={url} width={width} height={height} alt={alt} />
            )}
          </div>
          <div className={"flex flex-col"}>
            <div className={"flex-grow"}>{altSlate}</div>
            <div className={"flex-grow"}>{imageDescriptionSlate}</div>
          </div>
        </div>
      ) : (
        <div {...attributes} className={"cursor-pointer box flex-grow"} onClick={() => setOpenEditor(true)}>
          <EmptyImage height={height} isLoading={isLoading} text={emptyImageText} />
        </div>
      )}
      <AddImage
        isOpen={openEditor}
        setIsOpen={setOpenEditor}
        defaultImage={url}
        saveImageHandler={saveImageHandler}
        setIsLoading={setIsLoading}
      />
      <style jsx>{`
        .box {
          max-width: ${width * 0.75}px;
        }

        .loading {
          width: ${width * 0.75}px;
          height: ${height * 0.75}px;
        }

        .box:not(:last-child) {
          margin-right: 3rem;
        }
      `}</style>
    </>
  )
}

ImageOrEmpty.defaultProps = {
  width: 720,
  height: 620,
}
