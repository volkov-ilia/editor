import React from "react"
import { HeadInfoCard } from "../../components/editor/nested/HeadInfoCard"
import { EditorPrimaryButton } from "../../components/editor/nested/EditorPrimaryButton"
import { Title } from "../../components/editor/nested/Title"
import { HeadInfoCardListItem } from "../../components/editor/nested/HeadInfoCardListItem"
import { Meta, Story } from "@storybook/react"
import HeadInfoCardProps from "../../others/types/editor/nested/HeadInfoCardProps"

const def = {
  title: "MainPageHeader",
} as Meta

const Template2: Story<HeadInfoCardProps> = (args) => <HeadInfoCard {...args} />

export const Component2 = Template2.bind({})
Component2.args = {
  title: <Title>Actual news</Title>,
  button: <EditorPrimaryButton text={"All news"} title={"title"} onClick={() => {}} />,
  list: [
    <HeadInfoCardListItem
      key="1"
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}
      likes={111120}
      time={"11:11"}
      image={<img src={"https://i.ibb.co/wSfWBTJ/image-16.jpg"} alt={"bn"} />}
    />,
    <HeadInfoCardListItem
      key="2"
      text={"Some gray text"}
      likes={555}
      time={"12:11"}
      image={<img src={"https://i.ibb.co/wSfWBTJ/image-16.jpg"} alt={"bn"} />}
    />,
    <HeadInfoCardListItem
      key="3"
      text={"Some gray text"}
      likes={122222}
      time={"13:11"}
      image={<img src={"https://i.ibb.co/wSfWBTJ/image-16.jpg"} alt={"bn"} />}
    />,
  ],
}

export default def
