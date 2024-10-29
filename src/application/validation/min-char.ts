import { MinCharacterError } from '@/application/errors'
import { Validator } from './validator'

export class MinCharacter implements Validator {
  constructor (
    private readonly minCharacter: number,
    private readonly value: string
  ) {}

  validate (): Error | undefined {
    if (this.value.length < this.minCharacter) return new MinCharacterError(this.minCharacter)
    return undefined
  }
}
