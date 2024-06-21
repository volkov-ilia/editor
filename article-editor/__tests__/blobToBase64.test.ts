import { blobToBase64 } from "../utils/blobToBase64"

const blobPart: BlobPart[] = []
const file = new File(blobPart, "file")
const promise = new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = (error) => reject(error)
})
describe("blobToBase64 should return correct value", () => {
  it("blobToBase64 method should return correct promise", () => {
    expect(blobToBase64(file)).toEqual(promise)
  })
})
