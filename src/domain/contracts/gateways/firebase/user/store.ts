export interface UserStore {
  store: (input: UserStore.Input) => Promise<UserStore.Output>
}

export namespace UserStore {
  export type Input = {
    displayName: string
    phoneNumber: string
    email: string
    password: string
  }
  export type Output = undefined | {
    token: string
  }
}
