export interface GetEnvironment {
  getEnvironment: () => GetEnvironment.Output
}

export namespace GetEnvironment {
  export type Output = string
}
