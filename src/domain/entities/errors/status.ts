export class InvalidStatus extends Error {
  constructor () {
    super('Invalid Status')
    this.name = 'Invalid Status'
  }
}
