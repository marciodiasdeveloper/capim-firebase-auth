import { NotOptionPassedError, ValidateOptionError } from '@/application/errors'
import { Validator } from './validator'

export class OptionValidation implements Validator {
  constructor (
    private readonly options: string[],
    private readonly value: string
  ) { }

  validate (): Error | undefined {
    if (this.options.length === 0) return new NotOptionPassedError()
    if (!this.options.includes(this.value)) return new ValidateOptionError(this.options)
    return undefined
  }
}
