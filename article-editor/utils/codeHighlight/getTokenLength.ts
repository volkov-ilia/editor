import reduce from "lodash/reduce"
import Prism from "prismjs"

const getTokenLength: (token: string | Prism.Token) => number = (token) => {
  if (typeof token === "string") {
    return token.length
  } else if (typeof token.content === "string") {
    return token.content.length
  } else {
    return reduce(token.content as Prism.Token[], (l, t) => l + getTokenLength(t), 0)
  }
}

export default getTokenLength
