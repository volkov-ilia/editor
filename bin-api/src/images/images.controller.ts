import { Controller, Get, Param, Res, Post, UseGuards, UploadedFile, UseInterceptors } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { AuthGuard } from "@nestjs/passport"
import { Role } from "../roles/rolesList"
import { Roles, RolesGuard } from "@hwdtech/roles-guard"
import { ImagesService } from "./images.service"
import { Observable, of } from "rxjs"
import { join } from "path"

@Controller(`images`)
export class ImagesController {
  constructor(private imageService: ImagesService) {}

  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Post(`/${process.env.API_VERSION}/new`)
  @UseInterceptors(FileInterceptor("image"))
  async saveImage(@UploadedFile() file) {
    return this.imageService.saveImage(file.buffer)
  }

  @Get(":imagename")
  getImage(@Param("imagename") imagename, @Res() res): Observable<Record<string, unknown>> {
    return of(res.sendFile(join(process.cwd(), "img/" + imagename)))
  }
}
