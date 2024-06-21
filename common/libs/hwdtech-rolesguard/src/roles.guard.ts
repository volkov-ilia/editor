import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { ROLES_KEY } from "./roles.decorator"

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles: string[] = this.reflector.get<string[]>(ROLES_KEY, context.getHandler())
    this.serviceShouldHaveNonEmptySetOfRoles(requiredRoles)
    const { user } = context.switchToHttp().getRequest()
    return requiredRoles.some((role) => user.roles?.includes(role))
  }

  serviceShouldHaveNonEmptySetOfRoles = (requiredRoles: string[]): void => {
    if (requiredRoles.length == 0) {
      throw new HttpException(`Service should have non empty set of roles.`, HttpStatus.FORBIDDEN)
    }
  }
}
