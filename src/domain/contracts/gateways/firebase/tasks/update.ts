export interface TasksUpdate {
  update: (input: TasksUpdate.Input) => Promise<TasksUpdate.Output>
}

export namespace TasksUpdate {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    token: string
  }
}
