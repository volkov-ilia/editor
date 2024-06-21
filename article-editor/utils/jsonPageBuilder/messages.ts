/* eslint-disable @typescript-eslint/no-explicit-any */
export const nestedFieldPathBuilder = (parent: string, child: string) => (parent ? `${parent} > ${child}` : child)

export const nestedFewRequiredFieldsMessage = (componentName: string, dependenciesString: string) =>
  `[${componentName}] The fields [${dependenciesString}] are alternative to each other. And there must always be only one of them.\n[HowToFix] Please enter one if you're the owner.`

export const requiredField = (componentName: string, key: string) =>
  `[${componentName}] The field "${key}" is required here.\n[HowToFix] Please enter this field if you're the owner.`

export const IncorrectJsonValueByKey = (componentName: string, key: string, value: any) =>
  `[${componentName}] The value by key "${key}" is incorrect, got value:"${value}".\n[HowToFix] Please enter correct value if you're the owner.`

export const NoButtonActions = (componentName: string, actionKey: string) =>
  `[${componentName}] There is no button actions with key "${actionKey}"`

export const NoHandlerMessage = (componentName: string) => `There is no component handler for "${componentName}"`

export const NoValueByKeyMessage = (key: string) => `There is no value by key "${key}" in the page structure`

export const WrongArrayLengthMessage = (
  componentName: string,
  arrayName: string,
  gotArraySize: number,
  expectedArraySize: number
) => `[${componentName}] Wrong length of array "${arrayName}". Expected: ${expectedArraySize}, got: ${gotArraySize}`
