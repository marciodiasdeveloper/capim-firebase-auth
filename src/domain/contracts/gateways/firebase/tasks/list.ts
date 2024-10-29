export interface TasksList {
  list: (input: TasksList.Input) => Promise<TasksList.Output>
}

export namespace TasksList {
  export type Input = {
    page?: number
    rowsPerPage?: number
  }
  export type Output = undefined | {
    token: string
  }
}
