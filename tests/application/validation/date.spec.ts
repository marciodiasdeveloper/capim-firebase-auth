import { InvalidFieldError } from '@/application/errors'
import { DateValidation } from '@/application/validation'
describe('DateValidation', () => {
  it('should return InvalidFieldError if value date is invalid', () => {
    const sut = new DateValidation(new Date('aaaa'), 'date')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('date'))
  })

  it('should return InvalidFieldError if value date is number valid', () => {
    const sut = new DateValidation(new Date('aaaa'), 'date')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('date'))
  })

  it('should not return InvalidFieldError if value date is valid', () => {
    const sut = new DateValidation(new Date('2010-10-20'), 'date')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
