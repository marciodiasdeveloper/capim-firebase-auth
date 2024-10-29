
export interface Encrypt {
  encrypt: (input: Encrypt.Input) => Encrypt.Output
}

export namespace Encrypt {
  export type Input = { value: string }
  export type Output = undefined | {
    value: string
  }
}
