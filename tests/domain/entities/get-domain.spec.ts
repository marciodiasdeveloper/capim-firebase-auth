import { GetDomainUrl } from '@/domain/entities'

describe('GetDomainUrl', () => {
  it('should validate url', () => {
    const getUrl = new GetDomainUrl('url').getDomain()
    expect(getUrl).toBe('url')
  })
  it('should remove :3000', () => {
    const getUrl = new GetDomainUrl('url:3000').getDomain()
    expect(getUrl).toBe('url')
  })
  it('should remove www', () => {
    const getUrl = new GetDomainUrl('www.url').getDomain()
    expect(getUrl).toBe('url')
  })
  it('should remove http', () => {
    const getUrl = new GetDomainUrl('http://url').getDomain()
    expect(getUrl).toBe('url')
  })
})
