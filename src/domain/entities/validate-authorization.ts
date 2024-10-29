import { InvalidTokenError } from '@/application/errors'

interface Output {
  token: string
}

export class ValidateAuthorization {
  constructor (
    private readonly token: string
  ) { }

  validateAuth (): Output {
    if (!this.token.includes(' ')) {
      throw new InvalidTokenError()
    }
    const splitToken = this.token.split(' ')
    if (splitToken.length !== 2) {
      throw new InvalidTokenError()
    }
    return {
      token: splitToken[1]
    }
  }
}
