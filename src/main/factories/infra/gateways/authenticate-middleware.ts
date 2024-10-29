import { AuthenticateMiddleware } from '@/infra/gateways'

export const makeAuthenticationMiddleware = (): AuthenticateMiddleware => {
  return new AuthenticateMiddleware()
}
