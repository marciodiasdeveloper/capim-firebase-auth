import { AuthorizationTokenValidate } from '@/domain/contracts/gateways'

function parseJwt (authorization: string): any {
  return JSON.parse(Buffer.from(authorization.split('.')[1], 'base64').toString())
}

export class AuthorizationTokenValidateHandler implements AuthorizationTokenValidate {
  decode (input: AuthorizationTokenValidate.Input): AuthorizationTokenValidate.Output {
    return parseJwt(input.token)
  }
}
