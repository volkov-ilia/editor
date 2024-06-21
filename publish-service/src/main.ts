import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from "cookie-parser"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    credentials: true,
    origin: `${process.env.BASE_URL}/content/`,
  })
  app.use(cookieParser())
  await app.listen(process.env.INNER_HWD_SERVICE_PORT)
}
bootstrap()
