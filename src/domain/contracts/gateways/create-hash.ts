export interface CreateHash {
  createHash: () => CreateHash.Output
}

export namespace CreateHash {
  export type Output = string
}
