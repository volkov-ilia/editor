import { getSiteName } from "../utils/getAbsoluteUri"

test("network protocol should be selected correctly", () => {
  const OLD_ENV = process.env
  OLD_ENV.PUBLIC_URL = "test-url"
  expect(getSiteName()).toEqual("https://test-url")
  OLD_ENV.NODE_ENV = "development"
  expect(getSiteName()).toEqual("http://test-url")
})
