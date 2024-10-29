export interface TasksDelete {
  delete: (input: TasksDelete.Input) => Promise<TasksDelete.Output>
}

export namespace TasksDelete {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    token: string
  }
}
