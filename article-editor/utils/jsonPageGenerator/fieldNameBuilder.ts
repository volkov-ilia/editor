import camelCase from "lodash/camelCase"

const fieldNameBuilder = (componentName: string, pageNameVariable: string) => {
  return camelCase(`page ${componentName} ${pageNameVariable}`)
}

export default fieldNameBuilder
