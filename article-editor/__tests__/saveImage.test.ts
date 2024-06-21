import client from "../../common/utils/APIRequests/src/client"
import * as responseHandler from "../../common/utils/APIRequests/src/responseHandler"
import { saveImage } from "../utils/saveImage"

const blobPart: BlobPart[] = []
const file = new File(blobPart, "file")
const saveImageRes = "response"
const dataReq = new FormData()
dataReq.append("image", file)
const urlReq = "new"
const configReq = { headers: { "Content-Type": "multipart/form-data" } }
let error: string
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
jest.spyOn(client, "binSaveImage").mockImplementation((url, data, config) => {
  expect(url).toEqual(urlReq)
  expect(data).toEqual(dataReq)
  expect(config).toEqual(configReq)
  if (error)
    throw {
      response: {
        status: "status",
      },
    }
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolve(saveImageRes)
  })
})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
jest.spyOn(responseHandler, "responseHandler").mockImplementation()
describe("saveImage should return correct value", () => {
  it("saveImage should return saveImageRes", async () => {
    expect(await saveImage(file)).toEqual(saveImageRes)
  })

  it("saveImage should call responseHandler if client throw exception", async () => {
    error = "error"
    await saveImage(file)
    expect(responseHandler.responseHandler).toHaveBeenCalledTimes(1)
  })
})
