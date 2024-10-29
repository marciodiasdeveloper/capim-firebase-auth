import { InvalidFieldError } from '@/application/errors'
import { StringValidation } from '@/application/validation'

describe('StringValidation', () => {
  it('should throw if value is a invalid string', () => {
    const sut = new StringValidation(123, 'String')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('String'))
  })

  it('should return undefined if value is a valid string', () => {
    const sut = new StringValidation('valid_string', 'String')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
