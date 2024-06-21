import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { dbModule, PublishDBModule } from "./dbModules"
import { PublishModule } from "./publish/publish.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    PublishModule,
    AuthModule,
    dbModule.forRoot(process.env.PUBLISH_DB_CONNECTION),
    PublishDBModule,
  ],
})
export class AppModule {}
