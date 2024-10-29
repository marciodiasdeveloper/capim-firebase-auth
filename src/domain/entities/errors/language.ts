export class InvalidLanguage extends Error {
  constructor () {
    super('Invalid Language')
    this.name = 'InvalidLanguage'
  }
}
