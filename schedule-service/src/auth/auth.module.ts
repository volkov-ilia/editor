import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { JwtStrategy } from "./jwt.strategy"

@Module({
  imports: [PassportModule, JwtModule.register({})],
  controllers: [],
  providers: [JwtStrategy],
  exports: [],
})
export class AuthModule {}
