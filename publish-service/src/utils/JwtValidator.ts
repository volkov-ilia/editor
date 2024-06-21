export class JwtValidator {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  static payloadShouldContainNonEmptySetOfRoles = (payload: any): void => {
    if (!payload.roles) {
      throw new Error(`JWT doesn't contain key 'roles' in payload that are needed to determine the user's rights`)
    }
    if (payload.roles.length == 0) {
      throw new Error(`JWT key 'roles' in payload shouldn't be empty.`)
    }
  }
}
