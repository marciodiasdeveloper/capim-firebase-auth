export interface CacheGet {
  get: (input: CacheGet.Input) => Promise<CacheGet.Output>
}

export namespace CacheGet {
  export type Input = { key: string }
  export type Output = string | undefined
}

export interface CacheSet {
  set: (input: CacheSet.Input) => Promise<'OK'>
}

export namespace CacheSet {
  export type Input = { key: string, data: string | Buffer | number, milliseconds?: number }
  export type Output = 'OK' | undefined
}

export interface CacheDelete {
  delete: (input: CacheDelete.Input) => CacheDelete.Output
}

export namespace CacheDelete {
  export type Input = { key: string }
  export type Output = any | undefined
}

export interface CacheHas {
  has: (input: CacheHas.Input) => Promise<CacheHas.Output>
}

export namespace CacheHas {
  export type Input = { key: string }
  export type Output = boolean | undefined
}
