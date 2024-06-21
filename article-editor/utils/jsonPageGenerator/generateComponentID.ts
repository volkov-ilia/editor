import shortID from "../easterEggsConfig/shortID"

const generateComponentID = (type: string) => `${type}${shortID()}`

export default generateComponentID
