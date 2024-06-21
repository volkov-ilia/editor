import mapKeys from "lodash/mapKeys"
import includes from "lodash/includes"
import keys from "lodash/keys"
import { createClient } from "contentful-management"
import IStringJson from "../../types/utils/contentful/IStringJson"
import IStringNumberJson from "../../types/utils/contentful/IStringNumberJson"
import { CreateAssetProps, CreateEntryProps, Environment } from "contentful-management/types"
import internal from "stream"
import ContClientArgs from "../../types/utils/contentful/ContClientArgs"

const environmentType = process.env.NEXT_PUBLIC_CONTENTFUL_TEST_PAGE_STRUCTURE_TYPE_ID
const environmentSlateType = process.env.NEXT_PUBLIC_CONTENTFUL_SLATE_PAGE_STRUCTURE_TYPE_ID

class ContClient {
  private environment: Promise<Environment>
  constructor(args: ContClientArgs | undefined) {
    if (!args) throw new Error(`ContClient expects args "{ space, accessToken, environment }" but got "${args}"`)
    const { space, accessToken, environment } = args
    if (!space) throw new Error(`ContClient expects arg 'space' but got "${space}"`)
    if (!accessToken) throw new Error(`ContClient expects arg 'accessToken' but got "${accessToken}"`)
    if (!environment) throw new Error(`ContClient expects arg 'environment' but got "${environment}"`)
    const client = createClient({
      accessToken,
    })

    const getEnvironment = async () => {
      const s = await client.getSpace(space)
      return await s.getEnvironment(environment)
    }
    this.environment = getEnvironment()
  }

  getEntries = async (type: string, params: IStringNumberJson = {}) => {
    const query: IStringNumberJson = {
      include: 10,
    }
    const queriesNames: IStringJson = {
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
          const queryKey: string = queriesNames[key]
          query[queryKey] = value
        }
      })
    }
    return (await this.environment).getEntries({
      content_type: type,
      ...query,
    })
  }

  createAsset = async (params: CreateAssetProps) => {
    return (await this.environment).createAsset(params)
  }
  createEntry = async (type: string, params: CreateEntryProps) => {
    const structureType: IStringJson = {
      pageJson: environmentType as string,
      slateJson: environmentSlateType as string,
    }
    return (await this.environment).createEntry(structureType[type], params)
  }

  createUpload = async (file: string | ArrayBuffer | internal.Stream) => {
    return (await this.environment).createUpload({ file })
  }

  getAssets = async (params: IStringNumberJson) => {
    const query: IStringNumberJson = {
      include: 10,
    }
    const queriesNames: IStringJson = {
      description: "fields.description[in]",
    }
    if (params) {
      mapKeys(params, (value, key) => {
        if (includes(keys(queriesNames), key)) {
          const queryKey: string = queriesNames[key]
          query[queryKey] = value
        }
      })
    }
    return (await this.environment).getAssets(query)
  }
}

export default ContClient
