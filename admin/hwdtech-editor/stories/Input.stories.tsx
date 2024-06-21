import React from "react"
import { Input, InputProps } from "../components/UI/Input/Input"
import { Meta, Story } from "@storybook/react"

const storySettings = {
  title: "Input",
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export default storySettings
