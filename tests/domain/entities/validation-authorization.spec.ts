import { ValidateAuthorization } from '@/domain/entities/validate-authorization'
import { InvalidTokenError } from '@/application/errors'

describe('ValidateAuthorization', () => {
  it('should create an instance with a valid token', () => {
    const token = 'Bearer valid_token'
    const validateAuthorization = new ValidateAuthorization(token)
    expect(validateAuthorization).toBeInstanceOf(ValidateAuthorization)
  })
})

describe('ValidateAuthorization', () => {
  it('should return the token when it is valid', () => {
    const token = 'Bearer valid_token'
    const validateAuthorization = new ValidateAuthorization(token)
    const result = validateAuthorization.validateAuth()
    expect(result).toEqual({ token: 'valid_token' })
  })

  it('should throw InvalidTokenError if token does not contain a space', () => {
    const token = 'invalid_token'
    const validateAuthorization = new ValidateAuthorization(token)
    expect(() => validateAuthorization.validateAuth()).toThrow(InvalidTokenError)
  })

  it('should throw InvalidTokenError if token does not have two parts', () => {
    const token = 'Bearer'
    const validateAuthorization = new ValidateAuthorization(token)
    expect(() => validateAuthorization.validateAuth()).toThrow(InvalidTokenError)
  })
})
