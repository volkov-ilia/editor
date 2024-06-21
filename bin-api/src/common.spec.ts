import { Reflector } from "@nestjs/core"
import { RolesGuard } from "@hwdtech/roles-guard"

describe("RolesGuard methods should return correct value", () => {
  const guard = new RolesGuard(new Reflector())
  it("serviceShouldHaveNonEmptySetOfRoles should return nothing if service have non empty set of roles", async () => {
    expect(guard.serviceShouldHaveNonEmptySetOfRoles(["role1"])).toBe(undefined)
  })

  it("serviceShouldHaveNonEmptySetOfRoles should throw exception with 403-code if service have empty set of roles", async () => {
    try {
      guard.serviceShouldHaveNonEmptySetOfRoles([])
    } catch (error) {
      expect(error.status).toEqual(403)
      expect(error).toEqual(new Error("Service should have non empty set of roles."))
    }
  })
})
