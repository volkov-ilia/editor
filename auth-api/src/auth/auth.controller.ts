import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Req, Res } from "@nestjs/common"
import { OneTimeCodeDto } from "./dto/one-time-code.dto"
import { AuthService } from "./auth.service"
import { DataAboutUserDto } from "./dto/data-about-user.dto"

@Controller(`${process.env.API_VERSION}/${process.env.API_AUTH}`)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() oneTimeCode: OneTimeCodeDto, @Res() res) {
    try {
      const googleTokens = await this.authService.getGoogleTokens(oneTimeCode.code)
      const internalToken = await this.authService.createInternalToken(googleTokens.id_token)
      res
        .cookie("internal_token", internalToken, {
          domain: process.env.DOMAIN_NAME,
          path: `/`,
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        })
        .send()
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.SERVICE_UNAVAILABLE)
    }
  }

  @Delete("deleteCookies")
  async deleteCookies(@Res() res) {
    res.clearCookie("session").send()
  }

  @Get("/get-user")
  async getUser(@Res() res, @Req() req) {
    try {
      const google_token = req.cookies.google_token
      const payload = await this.authService.verifyGoogleToken(google_token)
      const dataAboutUser: DataAboutUserDto = {
        name: payload.name,
        email: payload.email,
      }
      res.json(dataAboutUser)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN)
    }
  }
}
