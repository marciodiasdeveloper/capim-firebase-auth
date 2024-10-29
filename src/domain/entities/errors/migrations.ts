export class NotRunMigrations extends Error {
  constructor (){
    super('Not Run Migrations Error')
    this.name = 'NotRunMigrations'
  }
}
