import { InvalidFieldError } from '@/application/errors'
import { BooleanValidation } from '@/application/validation'

describe('BooleanValidation', () => {
  it('should throw if value is a invalid boolean', () => {
    const sut = new BooleanValidation('invalid', 'default')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('default'))
  })

  it('should return undefined if value is a valid boolean', () => {
    const sut = new BooleanValidation(true, 'default')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
