/* istanbul ignore file */
import { IOCBaseContainer } from "./IoC.Container"
import { NotFoundDependencyError } from "./IoC.error"
import { IOCKey } from "./IoC.types"

/* eslint-disable  @typescript-eslint/no-explicit-any */
function resolve<T>(key: IOCKey, dependencyName: string, ...args: any): T {
  const dependency = IOCBaseContainer[key] as <T>(...argument: any) => T | undefined

  if (!dependency) {
    throw new NotFoundDependencyError("IoC key may be only IoC.Register or IoC.Resolve")
  }
  const resolvedDependency = dependency<T>(dependencyName, ...args)
  return resolvedDependency as T
}

export const IoC = {
  resolve: resolve,
}
