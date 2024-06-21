import { Injectable } from "@nestjs/common"
import { auth } from "googleapis/build/src/apis/iam"
import { sign } from "jsonwebtoken"
import { PayloadInternalTokenDto } from "./dto/payload-internal-token.dto"

@Injectable()
export class AuthService {
  private oauth2Client = new auth.OAuth2(process.env.CLIENT_ID, process.env.SECRET_ID, process.env.BASE_URL)

  async getGoogleTokens(code: string) {
    try {
      const { tokens } = await this.oauth2Client.getToken(code)
      return tokens
    } catch (e) {
      throw new Error(e)
    }
  }

  async createInternalToken(idToken: string) {
    try {
      const payload = await this.verifyGoogleToken(idToken)
      const internalPayload = {
        email: payload.email,
        name: payload.name,
        roles: ["Content.Viewer", "Content.Editor"],
        iat: payload.iat,
        exp: payload.exp,
      } as PayloadInternalTokenDto
      const internalToken = sign(internalPayload, process.env.JWT_SECRET)
      return internalToken
    } catch (e) {
      throw new Error(e)
    }
  }

  async verifyGoogleToken(idToken: string) {
    try {
      const verifyValidGoogleTokenId = await this.oauth2Client.verifyIdToken({ idToken })
      const payload = verifyValidGoogleTokenId.getPayload()
      return payload
    } catch (e) {
      throw new Error(e)
    }
  }
}
