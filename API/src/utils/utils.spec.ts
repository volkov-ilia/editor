import { wikiUrl } from "../wiki/wiki.url"
import { JwtValidator } from "./JwtValidator"
import { ReqParams } from "./ReqParams"

describe("ReqParamsValidator methods should return correct value", () => {
  it("convertTagsToArrayOfStrings should return array of tags", async () => {
    expect(ReqParams.convertTagsToArrayOfStrings("tag1 tag2 tag3")).toEqual(["tag1", "tag2", "tag3"])
  })

  it("putContentTypeIntoTags should return string with tags", async () => {
    expect(ReqParams.putContentTypeIntoTags("tag1 tag2 tag3", "document")).toEqual("tag1 tag2 tag3 document")
    expect(ReqParams.putContentTypeIntoTags(undefined, "document")).toEqual("document")
  })

  it("pageShouldBeANumberAndGreatThanZero should return nothing if page is number and great than zero", async () => {
    expect(ReqParams.pageShouldBeANumberAndGreatThanZero(5)).toBe(undefined)
  })

  it("pageShouldBeANumberAndGreatThanZero should throw exception if page isn't greater than zero", async () => {
    const page = -5
    try {
      ReqParams.pageShouldBeANumberAndGreatThanZero(page)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${page}`
        )
      )
    }
  })

  it("pageShouldBeANumberAndGreateThanZero should throw exception if page isn't number", async () => {
    const page = "abc"
    try {
      ReqParams.pageShouldBeANumberAndGreatThanZero(page)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${page}`
        )
      )
    }
  })

  it("countShouldBeANumberAndBetweenZeroAnd100 should return nothing if count is number and between 0 and 100", async () => {
    expect(ReqParams.countShouldBeANumberAndBetweenZeroAnd100(20)).toBe(undefined)
  })

  it("countShouldBeANumberAndBetweenZeroAnd100 should throw exception if count isn't between 0 and 100", async () => {
    let count = -5
    try {
      ReqParams.countShouldBeANumberAndBetweenZeroAnd100(count)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${count}`
        )
      )
    }
    count = 110
    try {
      ReqParams.countShouldBeANumberAndBetweenZeroAnd100(count)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${count}`
        )
      )
    }
  })

  it("countShouldBeANumberAndBetweenZeroAnd100 should throw exception if count isn't number", async () => {
    const count = "abc"
    try {
      ReqParams.countShouldBeANumberAndBetweenZeroAnd100(count)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${count}`
        )
      )
    }
  })
})

describe("ReqParamsValidator methods should return correct value", () => {
  it("pageShouldBeANumberAndGreateThanZero should throw exception if page isn't greater than zero", async () => {
    const page = -5
    try {
      ReqParams.pageShouldBeANumberAndGreatThanZero(page)
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${page}`
        )
      )
    }
  })
})

describe("ReqParamsValidator methods should return correct value", () => {
  it("payloadShouldContainNonEmptySetOfRoles should return nothing if payload contains non empty set of roles", async () => {
    expect(JwtValidator.payloadShouldContainNonEmptySetOfRoles({ roles: "role1" })).toBe(undefined)
    expect(JwtValidator.payloadShouldContainNonEmptySetOfRoles({ roles: ["role1", "role2"] })).toBe(undefined)
  })

  it("payloadShouldContainNonEmptySetOfRoles should throw exception with 403-code if payload contains empty set of roles", async () => {
    try {
      JwtValidator.payloadShouldContainNonEmptySetOfRoles({})
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `JWT doesn't contain key 'roles' in payload that are needed to determine the user's rights. See documentation on ${
            wikiUrl.prefix + wikiUrl.cardsRequests
          }`
        )
      )
    }
  })

  it("payloadShouldContainNonEmptySetOfRoles should throw exception with 403-code if payload contains empty set of roles", async () => {
    try {
      JwtValidator.payloadShouldContainNonEmptySetOfRoles({ roles: [] })
    } catch (error) {
      expect(error).toEqual(
        new Error(
          `JWT key 'roles' in payload shouldn't be empty. See documentation on ${
            wikiUrl.prefix + wikiUrl.cardsRequests
          }`
        )
      )
    }
  })
})
