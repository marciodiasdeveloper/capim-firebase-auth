import { InvalidFieldError } from '@/application/errors'
import { CpfValidation } from '@/application/validation'
describe('CpfValidation', () => {
  it('should return InvalidFieldError if value cpf is invalid', () => {
    const sut = new CpfValidation('aaa', 'cpf')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('cpf'))
  })

  it('should not return InvalidFieldError if value cpf is 000.000.000-00', () => {
    const sut = new CpfValidation('000.000.000-00', 'cpf')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('cpf'))
  })

  it('should not return InvalidFieldError if value cpf is valid', () => {
    const sut = new CpfValidation('827.577.030-05', 'cpf')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
