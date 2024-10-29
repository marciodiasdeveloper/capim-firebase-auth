import { InvalidUuidFieldError } from '@/application/errors'
import { Validator } from './validator'

const REGEX_UUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/

export class UuidValidation implements Validator {
  constructor (
    readonly value: any,
    readonly fieldName?: string
  ) {}

  validate (): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new InvalidUuidFieldError(this.fieldName)
    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!REGEX_UUID.test(this.value)) {
      return new InvalidUuidFieldError(this.fieldName)
    }
  }
}
