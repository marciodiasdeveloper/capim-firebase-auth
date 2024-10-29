export class InvalidOrder extends Error {
  constructor () {
    super('Invalid Order')
    this.name = 'InvalidOrder'
  }
}
