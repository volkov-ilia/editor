import MetaProps from "./MetaProps"

type MetaOpenGraphProps = Omit<MetaProps, "keywords" | "withAmp"> & {
  siteName: string
  imageUrl: string
}

export default MetaOpenGraphProps
