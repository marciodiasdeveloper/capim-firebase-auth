import { Controller } from '@/application/controllers'
import { ValidationController } from '@/application/decorators'
import { makeValidators } from '@/main/factories/infra/gateways'

export const makeValidationController = (controller: Controller): ValidationController => {
  return new ValidationController(controller, makeValidators())
}
