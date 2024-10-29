export class GetDomainUrl {
  constructor (private readonly url: string) { }

  private regex (): RegExp {
    return /^(?:https?:\/\/)?(?:www\.)?([^:/\s]+)(:\d+)?/
  }

  getDomain (): string {
    const matches = this.url.toString().match(this.regex())

    if (matches == null) {
      return ''
    }

    return matches[1]
  }
}
