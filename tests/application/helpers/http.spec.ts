import { ok, okCreated, okNoContent, badRequest, unauthorized, notFound, forbidden, serverError, StatusCode } from '@/application/helpers'
import { ForbiddenError, ServerError, UnauthorizedError, NotFoundError } from '@/application/errors'

describe('HTTP Helpers', () => {
  test('ok should return status 200 with data', () => {
    const data = { message: 'success' }
    const response = ok(data)
    expect(response).toEqual({
      statusCode: StatusCode.ok,
      data
    })
  })

  test('okCreated should return status 201', () => {
    const response = okCreated()
    expect(response).toEqual({
      statusCode: StatusCode.created
    })
  })

  test('okNoContent should return status 204', () => {
    const response = okNoContent()
    expect(response).toEqual({
      statusCode: StatusCode.noContent
    })
  })

  test('badRequest should return status 400 with error', () => {
    const error = new Error('Bad Request')
    const response = badRequest(error)
    expect(response).toEqual({
      statusCode: StatusCode.badRequest,
      data: error
    })
  })

  test('unauthorized should return status 401 with UnauthorizedError', () => {
    const response = unauthorized()
    expect(response).toEqual({
      statusCode: StatusCode.unauthorized,
      data: new UnauthorizedError()
    })
  })

  test('notFound should return status 404 with NotFoundError', () => {
    const response = notFound()
    expect(response).toEqual({
      statusCode: StatusCode.notFound,
      data: new NotFoundError()
    })
  })

  test('notFound should return status 404 with provided error', () => {
    const error = new Error('Not Found')
    const response = notFound(error)
    expect(response).toEqual({
      statusCode: StatusCode.notFound,
      data: error
    })
  })

  test('forbidden should return status 403 with ForbiddenError', () => {
    const response = forbidden()
    expect(response).toEqual({
      statusCode: StatusCode.forbidden,
      data: new ForbiddenError()
    })
  })

  test('serverError should return status 500 with ServerError', () => {
    const error = new Error('Server Error')
    const response = serverError(error)
    expect(response).toEqual({
      statusCode: StatusCode.serverError,
      data: new ServerError(error)
    })
  })

  test('serverError should return status 500 with ServerError when no error is provided', () => {
    const response = serverError(undefined)
    expect(response).toEqual({
      statusCode: StatusCode.serverError,
      data: new ServerError()
    })
  })
})
