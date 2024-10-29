import { NotOptionPassedError, ValidateOptionError } from '@/application/errors'
import { OptionValidation } from '@/application/validation'
describe('OptionValidation', () => {
  it('should return InvalidFieldError if value option is invalid', () => {
    const sut = new OptionValidation(['aa', 'bbb'], 'cpf')

    const error = sut.validate()

    expect(error).toEqual(new ValidateOptionError(['aa', 'bbb']))
  })

  it('should validate if options is empty', () => {
    const sut = new OptionValidation([], '')

    const error = sut.validate()

    expect(error).toEqual(new NotOptionPassedError())
  })

  it('should not return InvalidFieldError if value cpf is valid', () => {
    const sut = new OptionValidation(['cpf'], 'cpf')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
