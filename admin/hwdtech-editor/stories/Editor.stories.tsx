import React from "react"
import { Editor } from "../components"
import { EditorProps } from "../components/Editor"
import { Meta, Story } from "@storybook/react"

const storySettings = {
  title: "Editor",
  component: Editor,
} as Meta

const Template: Story<EditorProps> = (args) => <Editor {...args} />

export const Primary = Template.bind({})
Primary.args = {
  entity: "Card",
  content: <div>Привет!</div>,
}

export default storySettings
