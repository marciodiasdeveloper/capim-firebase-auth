import { TokenGenerator, TokenValidator, TokenDecode } from '@/domain/contracts/gateways'

import { JwtPayload, sign, verify } from 'jsonwebtoken'

export class JwtTokenHandler implements TokenGenerator, TokenValidator {
  constructor (private readonly secret: string) {}

  async generate ({ expirationInMs, key }: TokenGenerator.Input): Promise<TokenGenerator.Output> {
    const expirationInSeconds = expirationInMs / 1000
    return sign({ key }, this.secret, { expiresIn: expirationInSeconds })
  }

  async validate ({ token }: TokenValidator.Input): Promise<TokenValidator.Output> {
    const payload = verify(token, this.secret) as JwtPayload
    return payload.key
  }

  async decode ({ token }: TokenDecode.Input): Promise<TokenDecode.Output> {
    return this.parseJwt(token)
  }

  private parseJwt (token: string): any {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
  }
}
