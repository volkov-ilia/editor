import { CONTAINER, IDENTITY } from "./FieldsNames"
import { map } from "lodash"
import Contentful from "../../../../types/Contentful"

class FunctionsRules {
  public [IDENTITY](name: string, args: Contentful.CommonMeta): Contentful.IdentityRule {
    return {
      name,
      function: IDENTITY,
      args: [args] as Contentful.IdentityArgs,
    }
  }

  public [CONTAINER](name: string, args: Contentful.CommonMeta): Contentful.ContainerRule {
    const containerArgs = map(args as Contentful.ContainerMeta, (a) =>
      this[a.function](a.componentVariableName, a.args)
    )
    return {
      name,
      function: CONTAINER,
      args: containerArgs as Contentful.ContainerArgs,
    }
  }
}

export default new FunctionsRules()
