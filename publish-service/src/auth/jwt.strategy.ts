import { Strategy } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport"
import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { JwtValidator } from "../utils/JwtValidator"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        if (!req || !req.cookies) return null
        return req.cookies["internal_token"]
      },
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    })
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  validate(payload: any) {
    try {
      JwtValidator.payloadShouldContainNonEmptySetOfRoles(payload)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN)
    }
    return payload
  }
}
