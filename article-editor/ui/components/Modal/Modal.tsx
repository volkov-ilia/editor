import s from "./modal.module.css"
import React from "react"
import { AppDispatch } from "../../../app/store"
import { hide } from "../../../app/reducers/ModalWindowSlice"

type modelType = {
  children: JSX.Element | JSX.Element[]
  status: string
  changeStatus: AppDispatch
}

export const Modal: React.FC<modelType> = ({ children, status, changeStatus }) => {
  return (
    <>
      <div
        className={status ? `${s.modal__container} ${s.modal__container_active}` : `${s.modal__container}`}
        onClick={() => changeStatus(hide)}
      >
        <div className={status ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={(e) => e.stopPropagation()}>
          <span className={s.close} onClick={() => changeStatus(hide)} />
          {children}
        </div>
      </div>
    </>
  )
}
