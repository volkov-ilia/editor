import { withReact } from "slate-react"
import { createEditor } from "slate"
import { withHistory } from "slate-history"
import withTextEntry from "./normalizers/withTextEntry"
import withSignature from "./normalizers/withSignature"
import withVoidElement from "./normalizers/withVoidElement"
import withDescription from "./normalizers/withDescription"
import withParagraph from "./normalizers/withParagraph"
import withAlt from "./normalizers/withAlt"
import withPosition from "./normalizers/withPosition"
import withCode from "./normalizers/withCode"
import withSelector from "./normalizers/withSelector"
import withTitle from "./normalizers/withTitle"
import withLink from "./normalizers/withLink"
import withLinks from "./normalizers/withLinks"
import withImageDescription from "./normalizers/withImageDescription"
import withQuoteText from "./normalizers/withQuoteText"

//чем ближе нормализатор к withReact, тем позже запускается
const editorBuilder = withHistory(
  withVoidElement(
    withTextEntry(
      withParagraph(
        withDescription(
          withImageDescription(
            withQuoteText(
              withSignature(
                withAlt(withPosition(withCode(withSelector(withTitle(withLink(withLinks(withReact(createEditor()))))))))
              )
            )
          )
        )
      )
    )
  )
)

export default editorBuilder
