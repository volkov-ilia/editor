import React from "react"
import { Button } from "../components/UI/Button/Button"
import { SideColumn, SideColumnProps } from "../components/nestedComponents/SideColumn/SideColumn"
import { Meta, Story } from "@storybook/react"

const storySettings = {
  title: "SideColumn",
  component: SideColumn,
} as Meta

const Template: Story<SideColumnProps> = (args: SideColumnProps) => (
  <div>
    <SideColumn {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  // eslint-disable-next-line  @typescript-eslint/no-empty-function
  content: <Button content={"Сохранить в PDF"} action={() => {}} />,
}

export default storySettings
