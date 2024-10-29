import { ForbiddenError, ServerError, UnauthorizedError, NotFoundError } from '@/application/errors'

export type HttpResponse<T = any> = {
  statusCode: number
  data?: T
}

export enum StatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const ok = <T = any> (data: T): HttpResponse<T> => ({
  statusCode: StatusCode.ok,
  data
})

export const okCreated = (): HttpResponse => ({
  statusCode: StatusCode.created
})

export const okNoContent = (): HttpResponse => ({
  statusCode: StatusCode.noContent
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: StatusCode.badRequest,
  data: error
})

export const unauthorized = (): HttpResponse<Error> => ({
  statusCode: StatusCode.unauthorized,
  data: new UnauthorizedError()
})

export const notFound = (error?: Error): HttpResponse<Error> => ({
  statusCode: StatusCode.notFound,
  data: error ?? new NotFoundError()
})

export const forbidden = (): HttpResponse<Error> => ({
  statusCode: StatusCode.forbidden,
  data: new ForbiddenError()
})

export const serverError = (error: unknown): HttpResponse<Error> => ({
  statusCode: StatusCode.serverError,
  data: new ServerError(error instanceof Error ? error : undefined)
})
