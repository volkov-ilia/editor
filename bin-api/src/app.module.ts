import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { ImagesModule } from "./images/images.module"

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, ImagesModule],
})
export class AppModule {}
