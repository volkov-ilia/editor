class ComponentIdGenerator {
  static generateComponentID(type: string) {
    return `${type}${this.shortId()}`
  }

  private static shortId() {
    let firstPart = ((Math.random() * 46656) | 0).toString(36)
    let secondPart = ((Math.random() * 46656) | 0).toString(36)
    firstPart = ("000" + firstPart).slice(-3)
    secondPart = ("000" + secondPart).slice(-3)
    return firstPart + secondPart
  }
}

export default ComponentIdGenerator
