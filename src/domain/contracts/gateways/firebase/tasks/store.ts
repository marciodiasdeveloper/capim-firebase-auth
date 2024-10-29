export interface TasksStore {
  store: (input: TasksStore.Input) => Promise<TasksStore.Output>
}

export namespace TasksStore {
  export type Input = {
    title: string
    description: string
    status: string
    dueDate: string
  }
  export type Output = undefined | {
    id: string
  }
}
