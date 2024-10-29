export class NullValidation {
  constructor (private readonly data: null | any) { }

  validate (): boolean {
    if (typeof this.data === 'object' && this.data === null) {
      return true
    }
    return false
  }
}
