import React from "react"
import { ImageColumnWithText } from "../../components/page/article/ImageColumnWithText"
import { Meta, Story } from "@storybook/react"
import ImageColumnWithTextProps from "../../others/types/ImageColumnWithTextProps"

const def = {
  title: "ImageColumnWithText",
  component: ImageColumnWithText,
} as Meta

const Template: Story<ImageColumnWithTextProps> = (args) => <ImageColumnWithText {...args} />

export const AddImagePreview = Template.bind({})
AddImagePreview.args = {
  children: [<div>Some</div>],
  text: <div />,
}

export default def
