export const protocolRecover = (uri: string) => (uri && uri.indexOf("//") === 0 ? `https:${uri}` : uri)
