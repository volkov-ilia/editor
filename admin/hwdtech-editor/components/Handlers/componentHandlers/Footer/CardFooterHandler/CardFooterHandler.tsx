import React from "react"
import { IoC } from "../../../../../IoC/IoC"

export const CardFooterHandler = () => {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const Footer = IoC.resolve<React.FC<any>>("IoC.Resolve", "Components.Footer")
  return <Footer />
}
