import React from "react"
import { SymbolIcon } from "../../components/page/common/SymbolIcon"
import { icons } from "../../others/editor/iconCodes"
import { Meta, Story } from "@storybook/react"

const def = {
  title: "Loading",
} as Meta

const Template: Story<{ className: string }> = (args) => (
  <div {...args}>
    <SymbolIcon icon={icons.clock} className={"text-6xl text-green"} />
  </div>
)

export const AddImagePreview = Template.bind({})
AddImagePreview.args = {
  className: "rotate-center flex items-center justify-center w-16 h-16",
}

export default def
