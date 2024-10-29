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
export class PermissionError extends Error {
  constructor (){
    super('Permission Error')
    this.name = 'PermissionError'
  }
}
export class CouldNotDisableYourUserError extends Error {
  constructor () {
    super('Could Not Disable Your User Error')
    this.name = 'CouldNotDisableYourUserError'
  }
}

export class UserNotFoundError extends Error {
  constructor (){
    super('User Not Found Error')
    this.name = 'UserNotFoundError'
  }
}

export class UserUpdatedError extends Error {
  constructor (){
    super('User Update Error')
    this.name = 'UserUpdatedError'
  }
}

export class UserLanguageUpdatedError extends Error {
  constructor (){
    super('User Language Update Error')
    this.name = 'UserLanguageUpdatedError'
  }
}

export class UserAppearanceUpdatedError extends Error {
  constructor (){
    super('User Appearance Update Error')
    this.name = 'UserAppearanceUpdatedError'
  }
}

export class UserDeleteError extends Error {
  constructor (){
    super('User Delete Error')
    this.name = 'UserDeleteError'
  }
}

export class UserPasswordMismatchError extends Error {
  constructor (){
    super('The passwords entered do not match')
    this.name = 'UserPasswordMismatchError'
  }
}

export class CountUsersError extends Error {
  constructor () {
    super('Count Users Error')
    this.name = 'CountUsersError'
  }
}

export class CountUsersAccessError extends Error {
  constructor () {
    super('Count Users Access Error')
    this.name = 'CountUsersAccessError'
  }
}
