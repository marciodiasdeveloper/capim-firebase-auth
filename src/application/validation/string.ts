import { InvalidFieldError } from '@/application/errors'
import { Validator } from './validator'

export class StringValidation implements Validator {
  constructor (
    private readonly value: string,
    private readonly field: string
  ) {
  }

  validate (): Error | undefined {
    if (typeof this.value !== 'string') return new InvalidFieldError(this.field)
  }
}
