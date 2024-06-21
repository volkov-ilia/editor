import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from "cookie-parser"
import { urlencoded, json } from "express"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    credentials: true,
    origin: `${process.env.BASE_URL}/content/`,
  })
  app.use(cookieParser())
  app.use(json({ limit: "100mb" }))
  app.use(urlencoded({ extended: true, limit: "100mb" }))
  await app.listen(process.env.INNER_BIN_API_PORT)
}
bootstrap()
