export class AuthorizationRetrieveTokenError extends Error {
  constructor (){
    super('Authorization Retrieve Token Error')
    this.name = 'AuthorizationRetrieveTokenError'
  }
}
