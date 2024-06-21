import React from "react"
import { addDecorator, addParameters } from "@storybook/react"
import "../others/main.css"
import { SetupEditorIconFont } from "../../ui/components/SetupEditorIconFont"
import { SetupMainFont } from "../../ui/components/SetupMainFont"
import { withAmpDecorator } from "storybook-amp"
import { withNextRouter } from "storybook-addon-next-router"
import { SetupIconFont } from "../../ui/components/SetupIconFont"

const withIconFont = (storyFn) => (
  <>
    <SetupEditorIconFont />
    <SetupIconFont />
    {storyFn()}
  </>
)

const withRobotoFont = (storyFn) => (
  <>
    <SetupMainFont />
    {storyFn()}
  </>
)

const customStyles = ""

addDecorator(withIconFont)
addDecorator(withRobotoFont)
addDecorator(withAmpDecorator)
addDecorator(withNextRouter)
addParameters({
  amp: {
    isEnabled: false,
    styles: customStyles, // Custom styles from some string
  },
  layout: "fullscreen",
})
