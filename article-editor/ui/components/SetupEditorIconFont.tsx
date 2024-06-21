import fontWoff from "../fonts/editorIcons/icomoon.woff"
import Head from "next/head"
import React from "react"
import { useAmp } from "next/amp"

export const SetupEditorIconFont = () => {
  const isAmp = useAmp()

  return isAmp ? <AmpSetupIconFont /> : <NoAmpSetupIconFont />
}

const NoAmpSetupIconFont = () => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: "EditorIcons";
        src: url("${fontWoff}") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
    <Head>
      <link rel="prefetch" as="font" href={fontWoff} />
    </Head>
  </>
)

const AmpSetupIconFont = () => (
  <>
    <style jsx global>{`
      @font-face {
        font-family: "EditorIcons";
        src: url("${fontWoff}") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}</style>
    <Head>
      <link rel="prefetch" href={fontWoff} />
    </Head>
  </>
)
