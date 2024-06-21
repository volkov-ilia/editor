import React from "react"
import CodeProps from "../../../others/types/CodeProps"
import shortID from "../../../utils/shortID"

export const Code: React.FC<CodeProps> = ({ children, language, selector }) => (
  <>
    {selector}
    <pre className={`line-numbers language-${language}`}>
      <code className={`language-${language} flex flex-col`}>
        {children}
        <span className={"line-numbers-rows"}>
          {React.Children.map(children, (_: any) => (
            <span key={shortID()} />
          ))}
        </span>
      </code>
    </pre>
  </>
)
