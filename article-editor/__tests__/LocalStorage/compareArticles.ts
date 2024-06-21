import { compareArticles } from "../../utils/localStorage/compareArticles"

describe("compare articles tests", () => {
  const A = {
    hello: "world",
  }
  const B = {
    world: "hello",
  }
  it("should return true if objects are equal", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(compareArticles(A, A)).toBeTruthy()
  })
  it("should return false if objects are different", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(compareArticles(A, B)).toBeFalsy()
  })
})
