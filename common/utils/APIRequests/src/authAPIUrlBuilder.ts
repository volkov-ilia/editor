const authApiUrlBuilder = (url: string) => `${process.env.BASE_URL}/auth-api/${process.env.API_VERSION}/${url}`
export default authApiUrlBuilder
