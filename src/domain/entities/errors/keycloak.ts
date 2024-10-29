export class NotFoundTenantCredentialsError extends Error {
  constructor (){
    super('Not Found Tenant Credentials')
    this.name = 'NotFoundTenantCredentialsError'
  }
}
export class NotFoundUserInfoError extends Error {
  constructor (){
    super('Not Found User Info')
    this.name = 'NotFoundUserInfoError'
  }
}
