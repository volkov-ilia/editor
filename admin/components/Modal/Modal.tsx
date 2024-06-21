import s from "./modal.module.css"
import React, { useEffect } from "react"
import { IoC } from "../../hwdtech-IoC"

export const Modal = () => {
  const [show, toggleShow] = React.useState(false)
  /* istanbul ignore next */
  useEffect(() => {
    IoC.resolve("IoC.Register", "ModalWindow:toggle", () => {
      toggleShow((state) => !state)
    })
  }, [])

  return (
    <div
      data-testid="field"
      className={show ? `${s.modal__container} ${s.modal__container_active}` : `${s.modal__container}`}
      onClick={() => toggleShow(false)}
    >
      <div className={show ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={(e) => e.stopPropagation()}>
        <span data-testid="close" className={s.close} onClick={() => toggleShow(false)} />
        {IoC.resolve("IoC.Resolve", "ModalWindow:content")}
      </div>
    </div>
  )
}
