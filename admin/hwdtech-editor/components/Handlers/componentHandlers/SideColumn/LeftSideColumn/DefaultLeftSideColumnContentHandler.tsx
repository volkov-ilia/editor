import React from "react"
import { IoC } from "../../../../../IoC/IoC"
import { ButtonProps } from "../../../../UI/Button/Button"
import { ModalContent } from "../../../../../../components/Modal/ModalContent"

export const DefaultLeftSideColumnContentHandler = () => {
  const saveAsPDF = IoC.resolve<() => void>("IoC.Resolve", "Editor.Utils.SaveAsPDF")
  const ModalWindowToggle = () => {
    IoC.resolve<React.FC<() => void>>("IoC.Register", "ModalWindow:content", () => <ModalContent />)
    IoC.resolve<React.FC<() => void>>("IoC.Resolve", "ModalWindow:toggle")
  }
  const Button = IoC.resolve<React.FC<ButtonProps>>("IoC.Resolve", "Components.Button")
  const ButtonCreate = IoC.resolve<React.FC<ButtonProps>>("IoC.Resolve", "Components.ButtonCreate")

  const components: JSX.Element[] = []

  const buttonCreateProps: ButtonProps = {
    content: "Создать",
    action: ModalWindowToggle,
  }
  const buttonProps: ButtonProps = {
    content: "Сохранить в PDF",
    action: saveAsPDF,
  }

  components.push(<ButtonCreate {...buttonCreateProps} />)
  components.push(<Button {...buttonProps} />)

  return components
}
