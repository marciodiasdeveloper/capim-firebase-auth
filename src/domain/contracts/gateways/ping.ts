export interface Ping {
  ping: (input: Ping.Input) => Promise<Ping.Output>
}

export namespace Ping {
  // eslint-disable-next-line @typescript-eslint/ban-types
  export type Input = {

  }
  export type Output = undefined | {
    message: string
  }
}
