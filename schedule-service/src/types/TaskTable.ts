/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace TaskTable {
  export type Task = {
    idTask?: string
    time: number
    payload: {
      service: string
      action: string
      data: any
    }
    isComplete: boolean
  }
  export enum Types {
    http,
  }
}
export default TaskTable
