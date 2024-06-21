/* istanbul ignore file */
import { IoC as HWDTechIoC } from "../../hwdtech-IoC"

export const IoC = {
  resolve: HWDTechIoC.resolve,
}

type ResolveDependencyContainer = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  [key: string]: (...args: any[]) => any
}

export const registerObjectInIoC = (object: ResolveDependencyContainer) => {
  const keys = Object.keys(object)
  keys.forEach((key) => {
    IoC.resolve("IoC.Register", key, object[key])
  })
}
