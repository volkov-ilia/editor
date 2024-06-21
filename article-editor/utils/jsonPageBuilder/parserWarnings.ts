const parserWarningsSingleton = () => {
  let array: string[] = []
  return {
    push: (element: string) => array.push(element),
    clear: () => (array = []),
    copy: () => [...array],
  }
}

const parserWarnings = parserWarningsSingleton()

export default parserWarnings
