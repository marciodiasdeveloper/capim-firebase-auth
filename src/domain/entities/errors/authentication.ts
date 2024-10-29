export class AuthenticationError extends Error {
  constructor () {
    super('Authentication failed')
    this.name = 'AuthenticationError'
  }
}
export class NotFoundDataBaseError extends Error {
  constructor () {
    super('Not Found Database Error')
    this.name = 'NotFoundDataBaseError'
  }
}
export class NotCreateConnection extends Error {
  constructor () {
    super('Not create connection Error')
    this.name = 'NotCreateConnection'
  }
}
