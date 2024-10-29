import { InvalidFieldError } from '@/application/errors'
import { UuidValidation } from '@/application/validation'
describe('UuidValidation', () => {
  it('should return InvalidFieldError if value uuid is invalid', () => {
    const sut = new UuidValidation('aaa', 'uuid')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('uuid'))
  })

  it('should not return InvalidFieldError if value uuid is valid', () => {
    const sut = new UuidValidation(10, 'uuid')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('uuid'))
  })

  it('should not return InvalidFieldError if value uuid is valid', () => {
    const sut = new UuidValidation('1275d942-7cdc-11ed-a1eb-0242ac120002', 'uuid')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })

  it('should not return InvalidFieldError if value uuid is undefined', () => {
    const sut = new UuidValidation(null, 'uuid')

    const error = sut.validate()

    expect(error).toEqual(new InvalidFieldError('uuid'))
  })
})
