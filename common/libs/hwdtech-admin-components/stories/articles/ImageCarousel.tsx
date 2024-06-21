import React from "react"
import { ImageCarousel } from "../../components/page/article/ImageCarousel"
import ImageCarouselProps from "../../others/types/ImageCarouselProps"
import { Meta, Story } from "@storybook/react"
import { ImageCarouselItem } from "../../components/page/article/ImageCarouselItem"
import { ImageCarouselOrEmpty } from "../../components/page/slateComponents/ImageCarouselOrEmpty"
import ImageCarouselOrEmptyProps from "../../others/types/ImageCarouselOrEmptyProps"
import { SaveImageHandlerProps } from "../../others/types/SaveImageHandlerFunc"

const def = {
  title: "ImageCarousel",
} as Meta

const Template: Story<ImageCarouselProps> = (args) => <ImageCarousel {...args} />

export const Component = Template.bind({})
Component.args = {
  children: [
    <ImageCarouselItem
      src={
        "https://images.ctfassets.net/13g5no3omm60/3qVioGWsPREIVaXSCmSqw6/25fa948dbfed133116f428bcaca5a3b3/Mask_Group-3.png"
      }
      alt={"alt"}
      width={500}
      height={288}
      description={"desc"}
    />,
    <ImageCarouselItem
      src={
        "https://images.ctfassets.net/13g5no3omm60/3qVioGWsPREIVaXSCmSqw6/25fa948dbfed133116f428bcaca5a3b3/Mask_Group-3.png"
      }
      alt={"alt"}
      width={500}
      height={288}
    />,
  ],
}

const Template2: Story<ImageCarouselOrEmptyProps> = (args) => <ImageCarouselOrEmpty {...args} />

export const ImageCarouselOrEmptyStory = Template2.bind({})
ImageCarouselOrEmptyStory.args = {
  width: 700,
  height: 700,
  saveImageHandler: async (_: SaveImageHandlerProps) => console.log("saving image"),
  moveOnClick: () => {},
}

export default def
