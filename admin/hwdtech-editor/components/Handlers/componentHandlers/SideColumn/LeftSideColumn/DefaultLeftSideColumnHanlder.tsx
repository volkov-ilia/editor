import React from "react"
import { IoC } from "../../../../../IoC/IoC"
import { SideColumnProps } from "../../../../nestedComponents/SideColumn/SideColumn"
import { Component } from "../../../../types"

export const DefaultLeftSideColumnHanlder: Component<{ type: string }> = () => {
  const type = IoC.resolve("IoC.Resolve", "Editor.Type")

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Content = IoC.resolve<React.FC<any>>("IoC.Resolve", `${type}.LeftSideColumn.Content`)

  const leftSideColumnProps: SideColumnProps = {
    content: <Content {...type} />,
  }

  const Column = IoC.resolve<React.FC<SideColumnProps>>("IoC.Resolve", "Components.SideColumn")

  return <Column {...leftSideColumnProps} />
}
