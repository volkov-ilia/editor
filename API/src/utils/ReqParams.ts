export class ReqParams {
  static pageShouldBeANumberAndGreatThanZero = (page: number | string): void => {
    if (!(Number(page) && page > 0)) {
      throw new Error(
        `Page parameter in the query string has an invalid value. Page must be an number greater than 0, but got ${page}`
      )
    }
  }
  static countShouldBeANumberAndBetweenZeroAnd100 = (count: number | string): void => {
    if (!(Number(count) && count <= 100 && count > 0)) {
      throw new Error(
        `Count parameter in the query string has an invalid value. Count must be an number between 0 and 100, but got ${count}`
      )
    }
  }
  static convertTagsToArrayOfStrings = (tags: string): string[] => {
    return tags.split(" ")
  }
  static putContentTypeIntoTags = (tags: string, contentType: string): string => {
    if (tags) {
      return tags + " " + contentType
    }
    return contentType
  }
}
