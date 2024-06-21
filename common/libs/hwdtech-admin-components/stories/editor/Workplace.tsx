import React, { useState } from "react"
import { Workplace } from "../../components/editor/Workplace"
import { Editor } from "../../components/editor/Editor"
import { ComponentsToolbarItem } from "../../components/editor/nested/ComponentsToolbarItem"
import { PreviewImage } from "../../components/editor/nested/PreviewImage"
import { Title } from "../../components/editor/nested/Title"
import { Meta, Story } from "@storybook/react"
import WorkplaceProps from "../../others/types/editor/WorkplaceProps"
import ComponentsToolbarItemProps from "../../others/types/editor/nested/ComponentsToolbarItemProps"
import { SmallComponentsToolbar } from "../../components/editor/SmallComponentsToolbar"
import { SmallComponentsToolbarItem } from "../../components/editor/nested/SmallComponentsToolbarItem"
import { WorkplaceHeader } from "../../components/editor/WorkplaceHeader"
import { WorkplaceHeaderBottom } from "../../components/editor/WorkplaceHeaderBottom"
import { InputField } from "../../components/editor/nested/InputField"
import { EditorPrimaryButton } from "../../components/editor/nested/EditorPrimaryButton"
import { InputFieldsContainer } from "../../components/editor/nested/InputFieldsContainer"
import { FewOnLineElementsContainer } from "../../components/editor/nested/FewOnLineElementsContainer"
import { HeaderBottomButtonsContainer } from "../../components/editor/nested/HeaderBottomButtonsContainer"
import { DropDownInputList } from "../../components/editor/nested/DropDownInputList"

const def = {
  title: "Workplace",
  component: Workplace,
} as Meta

const Template: Story<WorkplaceProps> = (args) => <Workplace {...args} />

const Inputs = () => {
  const [value, setValue] = useState("")
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")
  const [value4, setValue4] = useState("")

  return (
    <InputFieldsContainer>
      <FewOnLineElementsContainer>
        <InputField value={value3} setValue={setValue3} placeholder={"Type the page keywords"} />
        <InputField value={value4} setValue={setValue4} placeholder={"Type the page preview image url"} />
      </FewOnLineElementsContainer>
      <DropDownInputList openText={"Expand the fields"} closeText={"Collapse the fields"}>
        <InputField value={value} setValue={setValue} placeholder={"Type the page title"} />
        <InputField value={value2} setValue={setValue2} placeholder={"Type the page description"} />
        <InputField value={value} setValue={setValue} placeholder={"Type the page title"} />
        <InputField value={value2} setValue={setValue2} placeholder={"Type the page description"} />
        <InputField value={value} setValue={setValue} placeholder={"Type the page title"} />
        <InputField value={value2} setValue={setValue2} placeholder={"Type the page description"} />
      </DropDownInputList>
    </InputFieldsContainer>
  )
}

export const WorkplacePreview = Template.bind({})
WorkplacePreview.args = {
  right: (
    <SmallComponentsToolbar>
      <SmallComponentsToolbarItem title={"italics"} disabled={false} onClick={() => {}} icon={"italics"} />
      <SmallComponentsToolbarItem title={"bold"} disabled={false} onClick={() => {}} icon={"bold"} />
      <SmallComponentsToolbarItem title={"underline"} disabled={false} onClick={() => {}} icon={"underline"} />
      <SmallComponentsToolbarItem title={"strike"} disabled={false} onClick={() => {}} icon={"s"} />
      <SmallComponentsToolbarItem title={"alignLeft"} disabled={false} onClick={() => {}} icon={"alignLeft"} />
      <SmallComponentsToolbarItem title={"alignCenter"} disabled={false} onClick={() => {}} icon={"alignCenter"} />
      <SmallComponentsToolbarItem title={"alignRight"} disabled={false} onClick={() => {}} icon={"alignRight"} />
      <SmallComponentsToolbarItem title={"h2"} disabled={false} onClick={() => {}} icon={"h2"} />
      <SmallComponentsToolbarItem title={"h3"} disabled={false} onClick={() => {}} icon={"h3"} />
      <SmallComponentsToolbarItem title={"link"} disabled={false} onClick={() => {}} icon={"link"} />
      <SmallComponentsToolbarItem title={"numList"} disabled={false} onClick={() => {}} icon={"numList"} />
      <SmallComponentsToolbarItem title={"dotList"} disabled={false} onClick={() => {}} icon={"dotList"} />
    </SmallComponentsToolbar>
  ),
  center: (
    // @ts-ignore
    <Editor>
      <div className={"ooo"} />
      <style jsx>{`
        .ooo {
          height: 100rem;
        }
      `}</style>
      <style global jsx>{`
        html {
          font-size: 16px;
          line-height: 1.5;
          background-color: #e5e5e5;
        }

        html::-webkit-scrollbar-track {
          border-radius: 0.75rem;
          border: 2px solid #d1d1d1;
          background-color: rgba(253, 253, 253, 1);
        }

        html::-webkit-scrollbar {
          margin-right: 1rem;
          width: 1rem;
          background-color: transparent;
        }

        html::-webkit-scrollbar-thumb {
          border-radius: 0.75rem;
          border: 0.125rem solid rgba(18, 182, 152, 1);
        }
      `}</style>
    </Editor>
  ),
  header: (
    <WorkplaceHeader
      bottomElements={
        <WorkplaceHeaderBottom
          center={<Inputs />}
          right={
            <HeaderBottomButtonsContainer>
              <EditorPrimaryButton onClick={() => {}} text={"Preview"} title={"Open preview page"} />
              <EditorPrimaryButton onClick={() => {}} text={"Draft"} title={"Make this page draft"} />
              <EditorPrimaryButton onClick={() => {}} text={"Publish"} title={"Publish this page"} />
            </HeaderBottomButtonsContainer>
          }
        />
      }
    />
  ),
}

const Template3: Story<ComponentsToolbarItemProps> = (args) => <ComponentsToolbarItem {...args} />

export const ComponentPreviewPreview = Template3.bind({})
ComponentPreviewPreview.args = {
  preview: (
    // @ts-ignore
    <PreviewImage
      src={"https://sun9-37.userapi.com/jXM1s3FdbZ0Aem5HGicbGcq-25Ijt_FVta4ABg/WloTgw_6_bQ.jpg"}
      alt={"alt"}
    />
  ),
  title: <Title>Actual news</Title>,
  description: "apple.js",
}

export default def
