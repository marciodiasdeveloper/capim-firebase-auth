import { MaxCharacterError } from '@/application/errors'
import { MaxCharacter } from '@/application/validation'
describe('MaxCharacter', () => {
  it('should validate max length', () => {
    const sut = new MaxCharacter(0, ' ')

    const error = sut.validate()

    expect(error).toEqual(new MaxCharacterError(0))
  })

  it('should validate min length', () => {
    const sut = new MaxCharacter(0, '')

    const error = sut.validate()

    expect(error).toEqual(undefined)
  })
})
