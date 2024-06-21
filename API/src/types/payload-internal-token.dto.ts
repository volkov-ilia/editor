export interface PayloadInternalTokenDto {
  email: string
  name: string
  roles: Array<string> | string
  iat: number
  exp: number
}
