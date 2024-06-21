import MetaProps from "./MetaProps"

type MetaOpenGraphProps = Omit<MetaProps, "keywords" | "withAmp"> & {
  siteName: string
  imageUrl: string
  type: string
}

export default MetaOpenGraphProps
