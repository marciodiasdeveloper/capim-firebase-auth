import { InvalidFieldError } from '@/application/errors'
import { Validator } from './validator'

const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export class EmailValidation implements Validator {
  constructor (
    private readonly value: string
  ) {}

  validate (): Error | undefined {
    if (!emailRegex.test(this.value)) return new InvalidFieldError('email')
  }
}
