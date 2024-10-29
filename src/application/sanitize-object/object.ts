export class ObjectValidation {
  constructor (private readonly data: object | any) { }

  validate (): boolean {
    if (typeof this.data === 'object' && Object.prototype.toString.call(this.data) === '[object Object') {
      return true
    }
    return false
  }
}
