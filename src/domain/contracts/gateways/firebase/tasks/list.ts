export interface TasksList {
  list: (input: TasksList.Input) => Promise<TasksList.Output>
}

export namespace TasksList {
  export type Input = {
    page: number
    rowsPerPage: number
  }
  export type Output = undefined | {
    data: [{
      id: string
      title: string
      description: string
      status: string
      dueDate: string
      createdAt: Date
      updatedAt: Date
    }]
    page: number
    rowsPerPage: number
  }
}
