export class AuthEmailAlreadyInUse extends Error {
  constructor () {
    super('Email exists')
    this.name = 'AuthEmailAlreadyInUse'
  }
}
