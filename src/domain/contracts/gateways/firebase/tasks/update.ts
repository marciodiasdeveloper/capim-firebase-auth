export interface TasksUpdate {
  update: (input: TasksUpdate.Input) => Promise<TasksUpdate.Output>
}

export namespace TasksUpdate {
  export type Input = {
    id: string
    title: string
    description: string
    status: string
    dueDate: string
  }
  export type Output = undefined | {
    id: string
  }
}
