export class ArrayValidation {
  constructor (private readonly data: string[] | any) { }

  validate (): boolean {
    if (!Array.isArray(this.data)) {
      return true
    }
    return false
  }
}
