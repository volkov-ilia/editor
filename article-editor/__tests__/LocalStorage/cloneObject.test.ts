import { cloneObject } from "../../utils/localStorage/cloneObject"

describe("compare articles tests", () => {
  const A = {
    hello: "world",
  }
  it("objects should be equal", () => {
    expect(cloneObject(A)).toEqual(A)
    expect(cloneObject(A) === A).toBeFalsy()
  })
})
