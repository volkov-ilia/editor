import { NotFoundDependencyError, ResolveDependencyError } from "./IoC.error"
import { IOCResolveStategy } from "./IoC.types"
/* istanbul ignore file */
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const IOCBaseContainer: any = {
  "IoC.Register": IOCBaseRegister,
  "IoC.Resolve": IOCBaseResolver,
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function IOCBaseResolver<T>(dependencyName: string, ...args: any): T {
  const key: string = dependencyName
  const resolvedDependencyArgs = args
  const targetDependency: IOCResolveStategy<T> | undefined = IOCBaseContainer[key]

  if (!targetDependency) {
    throw new NotFoundDependencyError(`Not found dependency with key ${key}`)
  }

  try {
    return targetDependency(...resolvedDependencyArgs)
  } catch (e) {
    throw new ResolveDependencyError(`Resolved dependency with key ${key} must be a function`)
  }
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function IOCBaseRegister(dependencyName: string, ...args: any) {
  IOCBaseContainer[dependencyName] = args[0]
}
