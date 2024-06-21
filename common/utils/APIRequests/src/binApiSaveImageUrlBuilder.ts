const binApiSaveImageUrlBuilder = (url: string) =>
  `${process.env.BASE_URL}/bin-api/images/${process.env.API_VERSION}/${url}`
export default binApiSaveImageUrlBuilder
