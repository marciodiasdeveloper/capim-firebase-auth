export interface ForgotPasswordStore {
  store: (input: ForgotPasswordStore.Input) => Promise<ForgotPasswordStore.Output>
}

export namespace ForgotPasswordStore {
  export type Input = {
    email: string
  }
  export type Output = undefined
}
