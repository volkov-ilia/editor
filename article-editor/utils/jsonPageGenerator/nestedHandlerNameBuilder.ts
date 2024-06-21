const nestedHandlerNameBuilder = (parent: string, child: string) => (parent ? `${parent} > ${child}` : child)

export default nestedHandlerNameBuilder
