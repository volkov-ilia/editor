/* eslint-disable no-console */
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useEditorModeContext } from "hwdtech-admin-components"
import jsonPageGenerator from "../../utils/jsonPageGenerator"
import handlers from "../../utils/jsonPageGenerator/handlers"
import { useAmp } from "next/amp"
import jsonPageParser from "../../utils/jsonPageBuilder/jsonPageParser"
import isEmpty from "lodash/isEmpty"
import READY_MESSAGE from "../../utils/postMessage/READY_MESSAGE"
import { getSiteName } from "../../utils/jsonPageBuilder/getAbsoluteUri"
import isEqual from "lodash/isEqual"
import pageHandler from "../../utils/jsonPageBuilder/pageHandler"
import { Descendant } from "slate"
import has from "lodash/has"
import get from "lodash/get"
import { PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import UNPRINTED_COMPONENTS from "../../utils/UNPRINTED_COMPONENTS"

const PreviewPage = () => {
  const { mode, setMode } = useEditorModeContext()
  const [value, setValue] = useState<Descendant[]>([])
  const [fields, setFields] = useState<PageFieldsTypes>()
  const { json, warnings: warningsGenerator } = jsonPageGenerator(value, handlers, fields, UNPRINTED_COMPONENTS)
  if (!isEmpty(warningsGenerator)) warningsGenerator.forEach((error) => console.warn(error))
  const isAmp = useAmp()
  const absoluteURL = getSiteName()
  const isNoIndex = true
  const { componentsProps, warnings } = jsonPageParser(json)
  if (!isEmpty(warnings)) warnings.forEach((error) => console.warn(error))

  const sendReady = () => {
    if (document.visibilityState === "visible") {
      window.opener?.postMessage(READY_MESSAGE, getSiteName())
    }
  }

  useEffect(() => {
    function updateDate<T>(event: MessageEvent, dataName: string, oldValue: T, setData: Dispatch<SetStateAction<T>>) {
      if (event.origin === getSiteName() && has(event.data, dataName)) {
        const parsedData = JSON.parse(get(event.data, dataName))
        if (!isEqual(oldValue, parsedData) && !isEmpty(parsedData)) {
          setData(parsedData)
          console.info(`[${new Date()}]: New data received`)
        }
      }
    }

    if (mode !== "site") setMode("site")
    const getFromEditor = (event: MessageEvent) => {
      updateDate<Descendant[]>(event, "slateValue", value, setValue)
      updateDate<PageFieldsTypes | undefined>(event, "fields", fields, setFields)
    }

    window.addEventListener("message", getFromEditor, false)
    document.addEventListener("visibilitychange", sendReady, false)

    if (isEmpty(value)) {
      window.opener?.postMessage(READY_MESSAGE, getSiteName())
    }
    return () => {
      window.removeEventListener("message", getFromEditor)
      document.removeEventListener("visibilitychange", sendReady)
    }
  }, [fields, mode, setMode, value])

  const components = mode === "site" && pageHandler(componentsProps, absoluteURL, isAmp, isNoIndex)
  return (
    <div className={"main"}>
      {components}
      <style jsx>{`
        .main {
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default PreviewPage
