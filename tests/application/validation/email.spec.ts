import { InvalidFieldError } from '@/application/errors'
import { EmailValidation } from '@/application/validation'
// import { faker } from '@faker-js/faker'
describe('EmailValidation', () => {
  it('should return InvalidFieldError if value email is invalid', () => {
    const sut = new EmailValidation('aaa')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('email'))
  })

  it('should not return InvalidFieldError if value email is valid', () => {
    const email = 'aaa@aaa.com'
    const sut = new EmailValidation(email)

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
