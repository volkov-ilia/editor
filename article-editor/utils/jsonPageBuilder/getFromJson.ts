import get from "lodash/get"

// eslint-disable-next-line @typescript-eslint/ban-types
const getFromJson = (json: {}, key: string) => get(json, key)

export default getFromJson
