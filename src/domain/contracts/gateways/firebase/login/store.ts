export interface LoginStore {
  store: (input: LoginStore.Input) => Promise<LoginStore.Output>
}

export namespace LoginStore {
  export type Input = {
    email: string
    password: string
  }
  export type Output = undefined | {
    token: string
  }
}
