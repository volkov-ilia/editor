import ImageBuilderProps from "../../../types/utils/contentful/ImageBuilderProps"

const imageDataBuilder = ({ fileName, assetName, upload, fileType, description }: ImageBuilderProps) => ({
  fields: {
    title: {
      "en-US": assetName,
    },
    description: {
      "en-US": description,
    },
    file: {
      "en-US": {
        contentType: fileType,
        fileName: fileName,
        uploadFrom: {
          sys: {
            type: "Link",
            linkType: "Upload",
            id: upload.sys.id,
          },
        },
      },
    },
  },
})

export default imageDataBuilder
