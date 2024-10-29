export interface TasksShow {
  show: (input: TasksShow.Input) => Promise<TasksShow.Output>
}

export namespace TasksShow {
  export type Input = {
    id: string
  }
  export type Output = undefined | {
    id: string
    title: string
    description: string
    status: string
    dueDate: string
    createdAt: Date
    updatedAt: Date
  }
}
