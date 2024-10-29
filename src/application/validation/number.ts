import { InvalidFieldError } from '@/application/errors'
import { Validator } from './validator'

export class NumberValidation implements Validator {
  constructor (
    private readonly value: number | string,
    private readonly field: string
  ) {
  }

  validate (): Error | undefined {
    if (isNaN(Number(this.value))) return new InvalidFieldError(this.field)
  }
}
