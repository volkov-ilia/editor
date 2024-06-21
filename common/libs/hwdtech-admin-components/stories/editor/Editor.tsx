import React from "react"
import { Editor } from "../../components/editor/Editor"
import { ToolbarItem } from "../../components/editor/nested/ToolbarItem"
import { Toolbar } from "../../components/editor/Toolbar"
import { icons } from "../../others/editor/iconCodes"
import { ToolbarItemsBox } from "../../components/editor/nested/ToolbatItemsBox"
import { Meta, Story } from "@storybook/react"
import EditorProps from "../../others/types/editor/EditorProps"

const def = {
  title: "Editor",
  component: Editor,
} as Meta

const Template: Story<EditorProps> = (args) => <Editor {...args} />

export const EditorPreview = Template.bind({})
EditorPreview.args = {
  children: (
    <div className={"ooo"}>
      <style jsx>{`
        .ooo {
          height: 100rem;
        }
      `}</style>
    </div>
  ),
  toolbar: (
    <Toolbar>
      <ToolbarItemsBox>
        <ToolbarItem size={"l"} icon={icons.dotList} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem size={"l"} icon={icons.archive} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem size={"l"} icon={icons.clock} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
      </ToolbarItemsBox>
      <ToolbarItemsBox>
        <ToolbarItem size={"m"} icon={icons.dotList} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem size={"m"} icon={icons.calender} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem size={"m"} icon={icons.home} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
      </ToolbarItemsBox>
      <ToolbarItemsBox>
        <ToolbarItem icon={icons.bold} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem icon={icons.italics} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
        <ToolbarItem icon={icons.magnifer} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
      </ToolbarItemsBox>
    </Toolbar>
  ),
}

const Template2: Story<EditorProps> = (args) => <Toolbar {...args} />

export const ToolbarPreview = Template2.bind({})
ToolbarPreview.args = {
  children: [
    <ToolbarItemsBox>
      <ToolbarItem size={"l"} icon={icons.dotList} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
    </ToolbarItemsBox>,
    <ToolbarItemsBox>
      <ToolbarItem size={"m"} icon={icons.dotList} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
    </ToolbarItemsBox>,
    <ToolbarItemsBox>
      <ToolbarItem icon={icons.bold} onClick={() => {}} onMouseDown={() => {}} title={"title"} />
    </ToolbarItemsBox>,
  ],
}

export default def
