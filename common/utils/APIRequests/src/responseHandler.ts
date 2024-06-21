import HTTPClient from "./HTTPClient"

export const responseHandler = (statusCode: number, router: any) => {
  if (statusCode === 401) {
    HTTPClient.delete(`${process.env.API_AUTH}/deleteCookies`, {})
    router.push("/auth")
  }
}
