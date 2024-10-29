import { AuthenticationMiddleware, Middleware } from '@/application/middlewares'
import { makeAuthorizationTokenValidateUseCase } from '@/main/factories/domain/use-cases'
import { makeValidationMiddleware } from '../decorators'

export const makeAuthenticationMiddleware = (): Middleware => {
  const middleware = new AuthenticationMiddleware(makeAuthorizationTokenValidateUseCase())
  return makeValidationMiddleware(middleware)
}
