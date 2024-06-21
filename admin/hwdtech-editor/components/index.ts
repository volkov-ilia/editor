import { registerObjectInIoC } from "../IoC/IoC"
import { handlers } from "./Handlers"
import { Footer } from "./nestedComponents/Footer/Footer"
import { Header } from "./nestedComponents/Header/Header"
import { SideColumn } from "./nestedComponents/SideColumn/SideColumn"
import { Button } from "./UI/Button/Button"
import { ButtonCreate } from "./UI/Button/ButtonCreate"
import { Input } from "./UI/Input/Input"
import { Fragment } from "react"

export const components = {
  ...handlers,

  "Components.Button": () => Button,
  "Components.ButtonCreate": () => ButtonCreate,
  "Components.Input": () => Input,
  "Components.Footer": () => Footer,
  "Components.Header": () => Header,
  "Components.SideColumn": () => SideColumn,
  "ModalWindow:content": () => Fragment,
}

export { Editor } from "./Editor"

registerObjectInIoC(components)
