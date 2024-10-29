export class DateValidation {
  constructor (private readonly data: Date | any) { }

  validate (): boolean {
    if (!(this.data instanceof Date)) {
      return true
    }
    return false
  }
}
