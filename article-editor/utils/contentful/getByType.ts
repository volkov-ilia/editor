import get from "lodash/get"
import IDataBuilderMap from "../../types/utils/contentful/IDataBuilderMap"

const getByType = (handlersMap: IDataBuilderMap, type: string, message = `There is no value for ${type}`) => {
  const fileDataHandler = get(handlersMap, type)
  if (fileDataHandler) return fileDataHandler
  else throw message
}

export default getByType
