import mapKeys from "lodash/mapKeys"
import includes from "lodash/includes"
import keys from "lodash/keys"
import get from "lodash/get"
import contentful from "contentful"

const getEntries = (type, params) => {
  const mapArgs = {
    ru: {
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_RU || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_RU || "",
    },
    en: {
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID_EN || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN_EN || "",
    },
  }

  const space = get(mapArgs, `${params.locale}.space`)
  const accessToken = get(mapArgs, `${params.locale}.accessToken`)
  const client = contentful.createClient({
    space,
    accessToken,
    resolveLinks: true,
    host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST,
  })
  let query = {}
  const queriesNames = {
    limit: "limit",
    order: "order",
    noInclude: "fields.slug[nin]",
    pathExists: "fields.path[exists]",
    path: "fields.path[in]",
    id: "fields.slug[in]",
  }
  if (params) {
    mapKeys(params, (value, key) => {
      if (includes(keys(queriesNames), key)) {
        query[queriesNames[key]] = value
      }
    })
  }
  query.include = 10
  return client.getEntries({
    content_type: type,
    ...query,
  })
}

const initializeClient = () => {
  return {
    getEntries,
  }
}

module.exports = initializeClient
