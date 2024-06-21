import React from "react"
import { Button, ButtonProps } from "../components/UI/Button/Button"
import { Meta, Story } from "@storybook/react"

const storySettings = {
  title: "Button",
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  content: "Сохранить",
}

export default storySettings
