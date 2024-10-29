export class MountUrl {
  constructor (
    private readonly domain: string,
    private readonly enviroment: 'production' | string,
    private readonly completeUrl: string,
    private readonly language: string
  ) {}

  private isProduction (): boolean {
    return this.enviroment === 'production'
  }

  private mountProtocol (): string {
    return this.isProduction() ? 'https' : 'http'
  }

  private mountPort (): string {
    return this.isProduction() ? '' : ':3000'
  }

  private mountLanguage (): string {
    return this.language === 'pt-BR' ? '' : '/' + this.language
  }

  mountUrl (): string {
    return `${this.mountProtocol()}://${this.domain}${this.mountPort()}${this.mountLanguage()}/${this.completeUrl}`
  }
}
