import Head from "next/head"
import React from "react"
import { useAmp } from "next/amp"

export const SetupRobotoFont = () => {
  const isAmp = useAmp()

  return isAmp ? <></> : <NoAmpSetupRobotoFont />
}

const NoAmpSetupRobotoFont = () => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
        media="print"
      />
    </Head>
  </>
)
