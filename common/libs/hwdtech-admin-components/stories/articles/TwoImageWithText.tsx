import React from "react"
import { TwoImageWithText } from "../../components/page/article/TwoImageWithText"
import { Meta, Story } from "@storybook/react"
import TwoImageWithTextProps from "../../others/types/TwoImageWithTextProps"

const def = {
  title: "ImageCarousel",
} as Meta

const Template2: Story<TwoImageWithTextProps> = (args) => <TwoImageWithText {...args} />

export const Component2 = Template2.bind({})
Component2.args = {}

export default def
