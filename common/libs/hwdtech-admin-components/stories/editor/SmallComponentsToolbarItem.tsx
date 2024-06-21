import React from "react"
import { SmallComponentsToolbarItem } from "../../components/editor/nested/SmallComponentsToolbarItem"
import { Meta, Story } from "@storybook/react"
import SmallComponentsToolbarItemProps from "../../others/types/editor/nested/SmallComponentsToolbarItemProps"

const def = {
  title: "SmallComponentsToolbarItem",
  component: SmallComponentsToolbarItem,
} as Meta

const Template: Story<SmallComponentsToolbarItemProps> = (args) => <SmallComponentsToolbarItem {...args} />

export const Small = Template.bind({})
Small.args = {
  icon: "settings",
}

export default def
