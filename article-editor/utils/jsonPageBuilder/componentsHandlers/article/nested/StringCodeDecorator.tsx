import Prism, { Token } from "prismjs"
import "prismjs/components/prism-kotlin.min"
import "prismjs/components/prism-csharp.min"
import "prismjs/components/prism-clike.min"
import "prismjs/components/prism-python.min"
import "prismjs/components/prism-json.min"
import "prismjs/components/prism-java.min"
import "prismjs/components/prism-c.min"
import "prismjs/components/prism-cpp.min"
import map from "lodash/map"
import clsx from "clsx"

const StringCodeDecorator = (language: string, codeText: string) => {
  const prismLang = Prism.languages[language]
  if (prismLang) {
    const tokens = Prism.tokenize(codeText, prismLang)
    return map(tokens, (t) => {
      if (typeof t === "string") return <span className={"token"}>{t}</span>
      const token = t as Token
      return <span className={clsx("token", token.type)}>{token.content}</span>
    })
  }
  return <span />
}

export default StringCodeDecorator
