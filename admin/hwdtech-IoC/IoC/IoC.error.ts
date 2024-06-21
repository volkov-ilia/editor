/* istanbul ignore file */
export class ResolveDependencyError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ResolveDependencyError"
  }
}

export class NotFoundDependencyError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "NotFoundDependencyError"
  }
}
