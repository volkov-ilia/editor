import { ContentForm } from "../../components/editor/ContentForm"
import React from "react"
import { Meta, Story } from "@storybook/react"
import ContentFormProps from "../../others/types/editor/ContentFormProps"

const def = {
  title: "ContentForm",
} as Meta

const Template2: Story<ContentFormProps> = (args) => <ContentForm {...args} />

export const Component2 = Template2.bind({})
Component2.args = {
  fields: [{ name: "text", component: ({ onChange = () => {} }) => <div /> }],
}

export default def
