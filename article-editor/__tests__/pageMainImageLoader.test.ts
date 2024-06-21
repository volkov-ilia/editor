import * as saveImage from "../utils/saveImage"
import pageMainImageLoader from "../utils/pageMainImageLoader"

const blobPart: BlobPart[] = []
const file = new File(blobPart, "file")
const saveImageRes = {
  data: "data",
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
jest.spyOn(saveImage, "saveImage").mockImplementation((fileParam) => {
  expect(fileParam).toEqual(file)
  return saveImageRes
})
describe("pageMainImageLoader should return correct value", () => {
  it("pageMainImageLoader should return data and call saveImage()", async () => {
    expect(await pageMainImageLoader(file)).toEqual(saveImageRes.data)
    expect(saveImage.saveImage).toHaveBeenCalledTimes(1)
  })
})
