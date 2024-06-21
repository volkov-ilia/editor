import React, { useEffect, useRef } from "react"
import ThemeConfigImageLoaderProps from "../../../others/types/editor/ThemeConfigImageLoaderProps"
import { EditorPrimaryButton } from "../nested/EditorPrimaryButton"

export const ThemeConfigImageLoader: React.FC<ThemeConfigImageLoaderProps> = ({
  idInput,
  uploadImage,
  loadButtonText,
  lastImage,
  showImageMethod,
  isMultiple,
  initialText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const refImages: React.RefObject<HTMLDivElement> = useRef(null)
  const text = initialText ? initialText : `Please upload image${isMultiple ? "s" : ""}`

  useEffect(() => {
    if (refImages.current && lastImage) {
      showImageMethod(refImages.current, lastImage, text)
    }
  }, [lastImage, refImages])

  return (
    <div className={"w-full flex flex-wrap"}>
      <div
        className="imageContainer flex flex-wrap w-full h-80 overflow-auto justify-center items-center"
        ref={refImages}
      >
        {text}
      </div>
      <input
        className={"hidden w-full"}
        type={"file"}
        accept={"image/svg"}
        multiple={isMultiple}
        id={idInput}
        ref={inputRef}
        onChange={(event) => uploadImage(event, inputRef)}
      />
      <label
        className="w-full"
        htmlFor={idInput}
        onClick={() => {
          if (inputRef.current) inputRef.current.click()
        }}
      >
        <EditorPrimaryButton text={loadButtonText} />
      </label>
      <style jsx>{`
        .imageContainer::-webkit-scrollbar-track {
          border-radius: 0.75rem;
          border: 2px solid #d1d1d1;
          background-color: transparent;
        }

        .imageContainer::-webkit-scrollbar {
          margin-right: 1rem;
          width: 1rem;
          background-color: transparent;
        }

        .imageContainer::-webkit-scrollbar-thumb {
          border-radius: 0.75rem;
          border: 0.125rem solid rgba(18, 182, 152, 1);
        }
      `}</style>
    </div>
  )
}
