
interface AccessInput {
  token?: string
}

export class Access {
  constructor (private readonly input: AccessInput){}

  validateToken (): string {
    if (this.input.token === undefined) {
      return 'failed'
    }

    return 'successful'
  }
}
