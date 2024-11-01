import { ValidationController } from '@/application/decorators/controller'
import { Controller } from '@/application/controllers'
import { Validators } from '@/infra/gateways'

describe('ValidationController', () => {
  const decorate: Controller = {} as any
  const validators: Validators = {} as any

  beforeEach(() => {
    // No need to reassign decorate and validators
  })

  it('should create an instance of ValidationController', () => {
    const validationController = new ValidationController(decorate, validators)

    expect(validationController).toBeInstanceOf(ValidationController)
  })

  // it('should set decorate and validators properties', () => {
  //   const validationController = new ValidationController(decorate, validators)

  //   expect(validationController.decorate).toBe(decorate)
  //   expect(validationController.validators).toBe(validators)
  // })
})
