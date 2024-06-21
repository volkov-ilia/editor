import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { SetupMainFont } from "../ui/components/SetupMainFont"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <SetupMainFont />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
