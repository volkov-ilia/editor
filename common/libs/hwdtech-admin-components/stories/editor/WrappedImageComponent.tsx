import React from "react"
import { WrappedImageComponent } from "../../components/page/slateComponents/WrappedImageComponent"
import { OptionalButton } from "../../components/editor/nested/OptionalButton"
import { OptionalButtonsBox } from "../../components/editor/nested/OptionalButtonsBox"
import { Meta, Story } from "@storybook/react"
import WrappedImageComponentProps from "../../others/types/WrappedImageComponentProps"

const def = {
  title: "WrappedImageComponent",
  component: WrappedImageComponent,
} as Meta

const Template: Story<WrappedImageComponentProps> = (args) => <WrappedImageComponent {...args} />

export const WrappedImage = Template.bind({})
WrappedImage.args = {
  src: "https://images.ctfassets.net/13g5no3omm60/5R1SrWSOKD6rGT0QpePdn/4bc03d3d9a51a61e2e443f8f19e2b882/pasted_image_0_3.jpg",
  alt: "screen",
  buttons: (
    <OptionalButtonsBox className={"bg-white pt-2 pb-2"}>
      <OptionalButton icon={"settings"} title={"title"} onClick={() => {}} />
      <OptionalButton icon={"settings"} title={"title"} onClick={() => {}} />
    </OptionalButtonsBox>
  ),
  width: 720,
  height: 620,
}

export default def
