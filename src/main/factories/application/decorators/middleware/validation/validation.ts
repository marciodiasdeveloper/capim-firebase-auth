import { Middleware } from '@/application/middlewares'
import { ValidationMiddleware } from '@/application/decorators'
import { makeValidators } from '@/main/factories/infra/gateways'

export const makeValidationMiddleware = (middleware: Middleware): Middleware => {
  return new ValidationMiddleware(middleware, makeValidators())
}
