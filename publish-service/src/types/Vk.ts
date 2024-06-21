// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Vk {
  export type ArticleConverted = {
    text: Array<string>
    imgs: Array<string>
  }
  export type ComponentHandlerResult = {
    [key: string]: (element: slateElement, state: ArticleConverted) => void
  }
  export type slateElement = {
    type?: string
    children?: Array<slateElement>
    text?: string
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    [propName: string]: any
  }
  export type SendImgToVKServerRes = {
    photo: string
    hash: string
    server: number
  }
  export type SaveWallPhotoRes = {
    id: string
    owner_id: string
  }
}

export default Vk
