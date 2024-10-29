
export interface Decrypt {
  decrypt: (input: Decrypt.Input) => Decrypt.Output
}

export namespace Decrypt {
  export type Input = { valueCrypted: string }
  export type Output = undefined | {
    value: string
  }
}
