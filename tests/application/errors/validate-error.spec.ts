import { validateError, ValidationError } from '@/application/errors/validate-error'
import { AuthenticationError, NotRunMigrations } from '@/domain/entities'
import { NotFoundError } from '@/application/errors'

describe('validateError', () => {
  const badRequest = jest.fn()
  const notFound = jest.fn()
  const serverError = jest.fn()
  const unauthorized = jest.fn()
  let validateErrors: ValidationError
  beforeEach(() => {
    validateErrors = {
      badRequest,
      notFound,
      serverError,
      unauthorized
    }
  })

  it('validate serverError is called', () => {
    const error = new Error()
    validateError(error, validateErrors)
    expect(serverError).toBeCalled()
  })
  it('validate unauthorized is called', () => {
    const error = new AuthenticationError()
    validateError(error, validateErrors)
    expect(unauthorized).toBeCalled()
  })
  it('validate notFound is called', () => {
    const error = new NotFoundError()
    validateError(error, validateErrors)
    expect(notFound).toBeCalled()
  })
  it('validate badRequest is called', () => {
    const error = new NotRunMigrations()
    validateError(error, validateErrors)
    expect(badRequest).toBeCalled()
  })
  it('validate serverError is called', () => {
    const error = new Error('my custom error')
    validateError(error, validateErrors)
    expect(serverError).toBeCalled()
  })
})
