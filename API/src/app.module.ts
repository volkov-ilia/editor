import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { CardsModule } from "./cards/cards.module"
import { dbModule } from "./dbModules"
import { ArticlesModule } from "./articles/articles.module"
import { AuthModule } from "./auth/auth.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    CardsModule,
    dbModule.forRoot(process.env.API_DB_CONNECTION),
    ArticlesModule,
    AuthModule,
  ],
})
export class AppModule {}
