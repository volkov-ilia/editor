import { SetMetadata } from "@nestjs/common"

export const ROLES_KEY = "roles"
export const Roles = (...roles: string[]) => {
  return SetMetadata(ROLES_KEY, roles)
}
