import React, { useState } from "react"
import map from "lodash/map"
import { SaveAndCancel } from "./nested/SaveAndCancel"
import linkTexts from "../page/slateComponents/texts/linkTexts"
import ContentFormProps from "../../others/types/editor/ContentFormProps"

export const ContentForm: React.FC<ContentFormProps> = ({ fields, setIsOpen, setContentFormResult }) => {
  const [value, setValue] = useState({})
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const current = event.target.value
    setValue({ ...value, [name]: current })
  }

  const save = () => {
    setContentFormResult({ ...value })
    setValue({})
    setIsOpen(false)
  }

  const cancel = () => {
    setValue({})
    setIsOpen(false)
  }
  return (
    fields && (
      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            cancel()
          }
        }}
        className={"back w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-50"}
      >
        <div className="w-2/3 rounded-2xl bg-white responsive-form sm:px-8 px-4 py-6 border-2 border-green">
          <SaveAndCancel onClickSave={save} onClickCancel={cancel} text={linkTexts} />
          {map(fields, (field) => (
            <div key={field.name} className={"fields-container my-3 text-left grid gap-4 items-center"}>
              <label className={"font-bold label mr-4"}>{field.name}</label>
              {field.component({
                placeholder: field.placeholder,
                onChange: (event: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(event, field.name),
              })}
            </div>
          ))}
        </div>
        <style jsx>{`
          label {
            color: rgb(118, 118, 118);
          }

          input {
            border-color: rgb(202, 194, 194);
          }

          input::placeholder {
            color: rgb(118, 118, 118);
          }

          .fields-container {
            grid-template-columns: 0.25fr 1.75fr;
          }

          .back {
            background-color: rgba(0, 0, 0, 0.25);
          }
        `}</style>
        <style jsx global>{`
          .root :global(.ReactCollapse--collapse) {
            transition: height 300ms;
          }

          .submit-button {
            outline: none;
          }

          .submit-button:hover {
            outline: none;
            box-shadow: 0 5px 15px rgb(16, 172, 132, 0.4);
          }
        `}</style>
      </div>
    )
  )
}
