import { Controller, Post, Body, UseGuards, Req } from "@nestjs/common"
import { AuthGuard } from "@nestjs/passport"
import { Role } from "../roles/rolesList"
import { Roles, RolesGuard } from "@hwdtech/roles-guard"
import { TaskService } from "./task.service"
import { Request } from "express"
import { decode } from "jsonwebtoken"

@Controller(`${process.env.API_VERSION}`)
export class TaskController {
  constructor(private taskService: TaskService) {}
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(Role.ContentEditor)
  @Post("/new")
  async saveTask(@Body() body, @Req() request: Request) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return this.taskService.saveTask(body, decode(request.cookies.internal_token).name)
  }
}
