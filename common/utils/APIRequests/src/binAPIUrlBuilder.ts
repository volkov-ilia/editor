const binApiUrlBuilder = (url: string) => `${process.env.BASE_URL}/bin-api/${process.env.API_VERSION}/${url}`
export default binApiUrlBuilder
