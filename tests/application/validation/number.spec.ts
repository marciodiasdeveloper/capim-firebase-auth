import { InvalidFieldError } from '@/application/errors'
import { NumberValidation } from '@/application/validation'
describe('NumberValidation', () => {
  it('should return InvalidFieldError if value number is invalid', () => {
    const sut = new NumberValidation('aaa', 'number')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('number'))
  })

  it('should not return InvalidFieldError if value number is valid', () => {
    const sut = new NumberValidation(123, 'number')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })

  it('should not return InvalidFieldError if value string number is valid', () => {
    const sut = new NumberValidation('123', 'number')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })

  it('should not return InvalidFieldError if value string number is valid', () => {
    const sut = new NumberValidation(NaN, 'number')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('number'))
  })
})
