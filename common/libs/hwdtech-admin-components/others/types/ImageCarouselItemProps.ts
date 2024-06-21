import React from "react"
import DescriptionProps from "./AtomicProps/DescriptionProps"
import AttributesProp from "./AtomicProps/AttributesProp"
import ImageProps from "./ImageProps"

type Props = DescriptionProps &
  AttributesProp &
  ImageProps & {
    buttons?: React.ReactNode
  }

export default Props
