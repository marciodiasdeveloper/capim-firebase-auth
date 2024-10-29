export interface LogSuccess {
  log: (input: LogSuccess.Input) => void
}

export namespace LogSuccess {
  export type Input = { message?: any }
}

export interface LogFailure {
  error: (input: Error, data?: any) => void
}

export namespace LogFatal {
  export type Input = { message?: unknown }
}
export interface LogFatal {
  fatal: (input: Error) => void
}
