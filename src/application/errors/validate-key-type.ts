export class ValidateKeyAndTypeError extends Error {
  constructor (key: string, type: string) {
    super(`Invalid ${key} must be type ${type}`)
  }
}
