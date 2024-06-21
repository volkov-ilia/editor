import React from "react"
import { AddWrapper } from "../../components/editor/AddWrapper"
import { PlusButton } from "../../components/editor/nested/PlusButton"
import { OptionalButton } from "../../components/editor/nested/OptionalButton"
import { OptionalButtonsBox } from "../../components/editor/nested/OptionalButtonsBox"
import { Meta, Story } from "@storybook/react"
import AddWrapperProps from "../../others/types/editor/AddWrapperProps"

const def = {
  title: "AddWrapper",
  component: AddWrapper,
} as Meta

type TemplateType = {
  s: AddWrapperProps
  t: AddWrapperProps
  f: AddWrapperProps
}

const Template: Story<TemplateType> = (args) => (
  <div className={"flex flex-col justify-between h-screen"}>
    <AddWrapper {...args.s} />
    <AddWrapper {...args.t} />
    <AddWrapper {...args.f} />
  </div>
)

const Template2: Story<TemplateType> = (args) => (
  <div className={"flex flex-col justify-between h-screen"}>
    <AddWrapper {...args.f} />
    <AddWrapper {...args.s} />
  </div>
)

export const AddWrapperPreview = Template.bind({})

export const AddWrapperPreview2 = Template2.bind({})

AddWrapperPreview.args = {
  f: {
    children: <span style={{ height: "500px" }}>Component</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
          {
            format: "GRAY_BLOCK_WITH_TEXT",
            name: "GRAY_BLOCK_WITH_TEXT",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
          {
            format: "2",
            name: "2",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
  },
  s: {
    children: <span>Component2</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
          {
            format: "GRAY_BLOCK_WITH_TEXT",
            name: "GRAY_BLOCK_WITH_TEXT",
          },
          {
            format: "2",
            name: "2",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
  },
  t: {
    children: <span style={{ height: "500px" }}>Component2</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
  },
}

AddWrapperPreview2.args = {
  f: {
    children: <span>Component</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
          {
            format: "GRAY_BLOCK_WITH_TEXT",
            name: "GRAY_BLOCK_WITH_TEXT",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
    optionalButtons: (
      <OptionalButtonsBox>
        <OptionalButton title={"title"} icon={"pen"} onClick={() => {}} />
        <OptionalButton title={"title"} icon={"users"} onClick={() => {}} />
      </OptionalButtonsBox>
    ),
  },
  s: {
    children: <span>Component2</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
          {
            format: "GRAY_BLOCK_WITH_TEXT",
            name: "GRAY_BLOCK_WITH_TEXT",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
  },
  t: {
    children: <span style={{ height: "500px" }}>Component2</span>,
    plusButton: (
      <PlusButton
        componentsMap={[
          {
            format: "ARTICLE_TEXT",
            name: "ARTICLE_TEXT",
          },
        ]}
        onClick={(e, t) => console.log(e.currentTarget.value, t)}
        title={"add components"}
        isOpen={true}
        setOpen={() => {}}
      />
    ),
  },
}

export default def
