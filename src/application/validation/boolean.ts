import { InvalidFieldError } from '@/application/errors'
import { Validator } from './validator'

export class BooleanValidation implements Validator {
  constructor (
    private readonly value: boolean,
    private readonly field: string
  ) {
  }

  validate (): Error | undefined {
    if (typeof this.value !== 'boolean') return new InvalidFieldError(this.field)
  }
}
