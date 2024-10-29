export class TokenExpiredError extends Error {
  constructor (){
    super('Token Expired Error')
    this.name = 'TokenExpired'
  }
}
export class NotFoundToken extends Error {
  constructor (){
    super('Not Found Token Error')
    this.name = 'NotFoundToken'
  }
}
export class NotDeleteToken extends Error {
  constructor (){
    super('Not Delete Token Error')
    this.name = 'NotDeleteToken'
  }
}
export class NotSendToken extends Error {
  constructor (){
    super('Not Send Token Error')
    this.name = 'NotSendToken'
  }
}
