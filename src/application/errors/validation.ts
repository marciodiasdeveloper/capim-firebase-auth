export class RequiredFieldError extends Error {
  constructor (fieldName?: string) {
    const message = fieldName === undefined
      ? 'Field required'
      : `The field ${fieldName} is required`
    super(message)
    this.name = 'RequiredFieldError'
  }
}

export class InvalidMimeTypeError extends Error {
  constructor (allowed: string[]) {
    super(`Unsupported file. Allowed extensions: ${allowed.join(', ')}`)
    this.name = 'InvalidMimeTypeError'
  }
}

export class TypeFieldError extends Error {
  constructor (field: string) {
    super(`The field ${field} is invalid`)
    this.name = 'TypeFieldError'
  }
}

export class MaxFileSizeError extends Error {
  constructor (maxSizeInMb: number) {
    super(`File upload limit is ${maxSizeInMb}MB`)
    this.name = 'MaxFileSizeError'
  }
}

export class InvalidFieldError extends Error {
  constructor (field: string) {
    super(`The field ${field} is invalid`)
    this.name = 'InvalidFieldError'
  }
}
export class InvalidValueEndFieldError extends Error {
  constructor (field: string) {
    super(`The field ${field} invalid`)
    this.name = 'InvalidValueEndFieldError'
  }
}
export class InvalidValueStartFieldError extends Error {
  constructor (field: string) {
    super(`The field ${field} invalid`)
    this.name = 'InvalidValueStartFieldError'
  }
}
export class InvalidFieldStartFieldError extends Error {
  constructor (field: string, startsValue: string) {
    super(`The field ${field} not starts with ${startsValue}`)
    this.name = 'InvalidFieldStartFieldError'
  }
}

export class InvalidFieldIncludesFieldError extends Error {
  constructor (field: string, includesValue: string) {
    super(`The field ${field} not includes with ${includesValue}`)
    this.name = 'InvalidFieldIncludesFieldError'
  }
}
export class InvalidFieldEndsFieldError extends Error {
  constructor (field: string, endssValue: string) {
    super(`The field ${field} not ends with ${endssValue}`)
    this.name = 'InvalidFieldEndsFieldError'
  }
}

export class DateNotError extends Error {
  constructor (field: string) {
    super(`The field ${field} is not a date`)
    this.name = 'DateNotError'
  }
}
export class ArrayNotError extends Error {
  constructor (field: string) {
    super(`The field ${field} is not a array`)
    this.name = 'ArrayNotError'
  }
}
export class DateBeforeError extends Error {
  constructor (field: string, value: string) {
    super(`The field ${field} is before ${value}`)
    this.name = 'DateBeforeError'
  }
}
export class DateAfterError extends Error {
  constructor (field: string, value: string) {
    super(`The field ${field} is after ${value}`)
    this.name = 'DateAfterError'
  }
}

export class InvalidUuidFieldError extends Error {
  constructor (field?: string) {
    field = field === undefined
      ? 'uuid'
      : field
    super(`The field ${field} is invalid`)
    this.name = 'InvalidUUidFieldError'
  }
}

export class MinCharacterError extends Error {
  constructor (minNumber: number) {
    super(`Min character is ${minNumber}`)
    this.name = 'MinCharacterError'
  }
}

export class MaxCharacterError extends Error {
  constructor (maxNumber: number) {
    super(`Max character is ${maxNumber}`)
    this.name = 'MaxCharacterError'
  }
}

export class ValidateOptionError extends Error {
  constructor (options: string[]) {
    super(`The option must be one of ${options.join(',')}`)
    this.name = 'ValidateOptionError'
  }
}

export class NotOptionPassedError extends Error {
  constructor () {
    super('Should pass option')
    this.name = 'NotOptionPassedError'
  }
}
