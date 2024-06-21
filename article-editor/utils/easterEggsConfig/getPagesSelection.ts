/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParsedPage } from "../../types/utils/easterEggsConfig/ParsedPage"
import forEach from "lodash/forEach"
import jsonPageParser from "../jsonPageBuilder/jsonPageParser"
import get from "lodash/get"
import includes from "lodash/includes"
import size from "lodash/size"

const getPagesSelection = async ({ ignoredPagesSlug, contData }: { ignoredPagesSlug: string[]; contData: any }) => {
  const pages: ParsedPage[] = []
  forEach(contData, (page) => {
    const temp = jsonPageParser(get(page, "fields.json.en-US"))
    const slug = get(page, "fields.slug.en-US")
    if (!includes(ignoredPagesSlug, slug) && slug && size(get(temp, "componentsProps")) > 0) {
      pages.push({
        slug: slug,
        componentsProps: get(temp, "componentsProps"),
      })
    }
  })
  return pages
}

export default getPagesSelection
