export class AuthorizationTokenError extends Error {
  constructor (){
    super('Authorization Token Error')
    this.name = 'AuthorizationTokenError'
  }
}

export class TokenNotCreatedError extends Error {
  constructor (){
    super('Token not Created Error')
    this.name = 'TokenNotCreatedError'
  }
}
