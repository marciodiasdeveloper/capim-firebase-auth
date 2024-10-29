export interface AuthorizationTokenValidate {
  authorizeToken: (input: AuthorizationTokenValidate.Input) => Promise<AuthorizationTokenValidate.Output>
}

export namespace AuthorizationTokenValidate {
  export type Input = {
    token: string
  }
  export type Output = undefined | {
    displayName: string
    email: string
  }
}
