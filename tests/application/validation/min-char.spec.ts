import { MinCharacterError } from '@/application/errors'
import { MinCharacter } from '@/application/validation'
describe('MinCharacter', () => {
  it('should validate min length', () => {
    const sut = new MinCharacter(1, '')

    const error = sut.validate()

    expect(error).toEqual(new MinCharacterError(1))
  })

  it('should validate empty length', () => {
    const sut = new MinCharacter(0, '')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
