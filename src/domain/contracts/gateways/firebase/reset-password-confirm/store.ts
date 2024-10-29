export interface ResetPasswordConfirmStore {
  store: (input: ResetPasswordConfirmStore.Input) => Promise<ResetPasswordConfirmStore.Output>
}

export namespace ResetPasswordConfirmStore {
  export type Input = {
    oobCode: string
    newPassword: string
  }
  export type Output = undefined | {
    token: string
  }
}
