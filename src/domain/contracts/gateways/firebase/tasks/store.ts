export interface TasksStore {
  store: (input: TasksStore.Input) => Promise<TasksStore.Output>
}

export namespace TasksStore {
  export type Input = {
    email: string
    password: string
  }
  export type Output = undefined | {
    token: string
  }
}
