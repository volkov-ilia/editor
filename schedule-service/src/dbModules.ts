import { MongooseModule } from "@nestjs/mongoose"
import { TaskSchema } from "./tasks/schemas/task.schemas"

export const dbModule = MongooseModule

export const TaskDBModule = dbModule.forFeature([
  {
    name: "Task",
    schema: TaskSchema,
  },
])
