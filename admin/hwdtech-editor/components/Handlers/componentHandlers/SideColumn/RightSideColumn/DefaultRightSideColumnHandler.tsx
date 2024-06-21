import React from "react"
import { IoC } from "../../../../../IoC/IoC"

export const DefaultRightSideColumnHandler = () => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Column = IoC.resolve<React.FC<any>>("IoC.Resolve", "Components.SideColumn")
  return <Column />
}
