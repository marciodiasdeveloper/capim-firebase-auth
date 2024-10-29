import * as Errors from '@/domain/entities/errors'
import { NotFoundError } from './http'
import { makeLogger } from '@/main/factories/infra/gateways'
export interface ValidationError {
  unauthorized: () => any
  badRequest: (error: Error) => any
  serverError: (error: Error) => any
  notFound: (error: Error) => any
}

export function validateError<T> (error: Error, validationFunctions: ValidationError, input?: any): T {
  const logger = makeLogger()
  if (error instanceof Errors.AuthenticationError) {
    // logger.error(error, input)
    return validationFunctions.unauthorized()
  }
  if (error instanceof NotFoundError) {
    logger.error(error, input)
    return validationFunctions.notFound(error)
  }
  const errorFinded = Object.keys(Errors).find((errorKey) => {
    return error instanceof Errors[errorKey as keyof typeof Errors]
  })
  if (errorFinded != null) {
    logger.error(error, input)
    return validationFunctions.badRequest(error)
  }
  logger.fatal(error, input)
  return validationFunctions.serverError(error)
}
