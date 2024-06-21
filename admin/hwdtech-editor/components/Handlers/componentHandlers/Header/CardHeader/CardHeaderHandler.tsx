import { IoC } from "../../../../../IoC/IoC"
import { HeaderProps } from "../../../../nestedComponents/Header/Header"
import React from "react"
import { Component } from "../../../../types"

export const CardHeaderHandler: Component<{ type: string }> = () => {
  const type = IoC.resolve("IoC.Resolve", "Editor.Type")

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Content = IoC.resolve<React.FC<any>>("IoC.Resolve", `${type}.Header.Content`)

  const headerProps: HeaderProps = {
    content: <Content type={"Resume"} />,
    altLogo: "meanty logo",
  }

  const Header = IoC.resolve<React.FC<HeaderProps>>("IoC.Resolve", "Components.Header")

  return <Header {...headerProps} />
}
