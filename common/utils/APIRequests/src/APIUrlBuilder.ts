const apiUrlBuilder = (url: string) => `${process.env.BASE_URL}/API/${process.env.API_VERSION}/${url}`
export default apiUrlBuilder
