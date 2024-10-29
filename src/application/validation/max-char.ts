import { MaxCharacterError } from '@/application/errors'
import { Validator } from './validator'

export class MaxCharacter implements Validator {
  constructor (
    private readonly maxCharacter: number,
    private readonly value: string
  ) {}

  validate (): Error | undefined {
    if (this.value.length > this.maxCharacter) return new MaxCharacterError(this.maxCharacter)
    return undefined
  }
}
