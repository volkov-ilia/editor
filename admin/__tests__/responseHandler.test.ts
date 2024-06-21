import { responseHandler } from "../../common/utils/APIRequests/src/responseHandler"
import router from "next/router"

const statusCode = 401
const authRoute = "/auth"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
jest.spyOn(router, "push").mockImplementation((route) => {
  expect(route).toBe(authRoute)
})
afterEach(() => {
  jest.clearAllMocks()
})

describe("responseHandler should return correct value", () => {
  it("responseHandler should call router.push if statusCode === 401", async () => {
    responseHandler(statusCode, router)
    expect(router.push).toHaveBeenCalledTimes(1)
  })
})
