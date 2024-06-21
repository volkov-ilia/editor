import React from "react"
import { AddImage } from "../../components/editor/AddImage"
import { Meta, Story } from "@storybook/react"
import AddImageProps from "../../others/types/editor/AddImageProps"

const def = {
  title: "AddImage",
  component: AddImage,
} as Meta

const Template: Story<AddImageProps> = (args) => <AddImage {...args} />

export const AddImagePreview = Template.bind({})
AddImagePreview.args = {
  defaultImage:
    "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/b5bd34054bc849159d949d50021d8926.png",
  isOpen: true,
}

export default def
