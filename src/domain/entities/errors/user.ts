export class NotFoundUserError extends Error {
  constructor (){
    super('Not Found User')
    this.name = 'NotFoundUserError'
  }
}
export class UserCreatedError extends Error {
  constructor (){
    super('User Created Error')
    this.name = 'UserCreatedError'
  }
}

export class UserAlreadyExistsError extends Error {
  constructor (){
    super('User Already Exists Error')
    this.name = 'UserAlreadyExistsError'
  }
}

export class UserNotFoundError extends Error {
  constructor (){
    super('User Not Found Error')
    this.name = 'UserNotFoundError'
  }
}
