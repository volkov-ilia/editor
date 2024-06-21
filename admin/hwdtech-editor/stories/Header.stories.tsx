import React from "react"
import { Header, HeaderProps } from "../components/nestedComponents/Header/Header"
import { Meta, Story } from "@storybook/react"

const storySettings = {
  title: "Header",
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export default storySettings
